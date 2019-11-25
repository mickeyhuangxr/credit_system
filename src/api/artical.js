import request from '@/utils/request'

export function login(data){  //登录
  return request({
    url:'/user/login',
    method:'post',
    data
  })
}

export function loanCreate(data){  //贷款申请
  return request({
    url:'/loan/create',
    method:'post',
    data
  })
}

export function loanList(data){  //申请管理 -查询
  return request({
    url:'/loan/list',
    method:'get',
    params:data
  })
}

export function loanUpdate(data){  //申请管理 -编辑
  return request({
    url:'/loan/update',
    method:'put',
    data
  })
}
export function loanDelete(data){  //申请管理 -删除
  return request({
    url:'/loan/delete/'+data,
    method:'delete',
  })
}
export function loanToApprove(data){  //申请管理 -提交审核
  return request({
    url:'/loan/submitToApprove',
    method:'post',
    data
  })
}
//贷款初审
export function loanFirstQuery(data){  //贷款初审-查询
  return request({
    url:'/approve/first/list',
    method:'get',
    params:data
  })
}
export function loanFirstCheck(data){  //贷款初审-查看
  return request({
    url:'/loan/query',
    method:'get',
    params:data
  })
}
export function loanFirstPass(data){  //贷款初审-通过
  return request({
    url:'/approve/first/pass',
    method:'post',
    data
  })
}
export function loanFirstReject(data){  //贷款初审-拒绝
  return request({
    url:'/approve/first/reject',
    method:'post',
    data
  })
}
//贷款终审
export function loanEndQuery(data){  //贷款终审-查询
  return request({
    url:'/approve/end/list',
    method:'get',
    params:data
  })
}
export function loanEndCheck(data){  //贷款终审-查看
  return request({
    url:'/loan/query',
    method:'get',
    params:data
  })
}
export function loanEndPass(data){  //贷款终审-通过
  return request({
    url:'/approve/end/pass',
    method:'post',
    data
  })
}
export function loanEndReject(data){  //贷款终审-拒绝
  return request({
    url:'/approve/end/reject',
    method:'post',
    data
  })
}
//标的管理
export function contractQuery(data){  //标的管理-查询
  return request({
    url:'/contract/list',
    method:'get',
    params:data
  })
}
export function contractCreateFile(data){  //标的管理-生成合同
  return request({
    url:'/contract/createFile',
    method:'post',
    data
  })
}
export function contractDownload(data){  //标的管理-下载合同
  return request({
    url:'/contract/download',
    method:'get',
    params:data
  })
}
export function createManager(data){  //创建管理员
  return request({
    url:'/permission/createUser',
    method:'post',
    data
  })
}
export function showManager(){  //创建管理员
  return request({
    url:'/user/list',
    method:'get',

  })
}
