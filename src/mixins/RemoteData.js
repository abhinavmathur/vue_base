export default function(resources) {
  return {
    created(){
      for(const key in resources){
        let url = resources[key]
        this.fetchResource(key, url)
      }
    },
    data(){
      let initData = {
        remoteDataLoading: 0
      };

      for(const key in resources){
        initData[key] = null
      }

      return initData;
    },
    computed: {
      remoteDataBusy () {
        return this.$data.remoteDataLoading !== 0
      }
    },
    methods: {
      async fetchResource(key, url){
        this.$data.remoteDataLoading++;
        try {
          this.$data[key] = await this.$fetch(url)
        } catch(e) {
          console.error(e)
        }
        this.$data.remoteDataLoading--;
      }
    }
  }
}
