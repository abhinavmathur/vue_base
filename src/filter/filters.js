import momemt from 'moment'

export function date(value){
  return moment(value).format('L')
}
