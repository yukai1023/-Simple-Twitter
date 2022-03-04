import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow (datatime) {
      moment.locale('zh-tw')
      if (!datatime) return '-'
      return moment(datatime).fromNow()
    },
    fromTime (datatime) {
      moment.locale('zh-tw')
      if (!datatime) return '-'
      return moment(datatime).format('ALT')
    },
    fromDay (datatime) {
      moment.locale('zh-tw')
      if (!datatime) return '-'
      return moment(datatime).format('ll')
    }
  }
}
