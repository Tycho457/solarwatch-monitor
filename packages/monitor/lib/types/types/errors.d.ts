import { BaseReportData, ReportValue } from './common'
export declare enum ErrorType {
  JS = 'js_error',
  RESOURCE = 'resource_error',
  AJAX = 'ajax_error',
  VUE = 'vue_error',
  PROMISE = 'promise_error',
}
export interface JsEventTarget {
  src?: string
  href?: string
  tagName?: string
}
export interface AjaxEventTarget {
  status?: number
  response?: string
  statusText?: string
  responseURL?: string
}
export interface ErrorReportData extends BaseReportData {
  value?: ReportValue
}
export interface RejectReason {
  message: string
  stack: string
}
