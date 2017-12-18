export default function(id, fields){
  return {
    created(){
      for (const field of fields) {
        const savedValue = localStorage.getItem(`${id}.${field}`)
        if (savedValue !== null) {
          this.$data[field] = JSON.parse(savedValue)
        }
      }
    },
    methods: {
      saveAllPersistentData(){
        for(const field in fields){
          localStorage.setItem(`${id}.${field}`, JSON.stringify(this.$data[field]))
        }
      }
    },
    watch: fields.reduce((object, field) => {
      object[field] = function(val){
        localStorage.setItem(`${id}.${field}`, JSON.stringify(val))
      };
      return object
    }, {}),
    beforeDestroy(){
      this.saveAllPersistentData()
    }
  }
}
