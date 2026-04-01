/*
 * @Author: CL
 * @Date: 2026-03-31 15:41:16
 * @LastEditTime: 2026-04-01 16:57:47
 * @Description: 服务器以及接口
 */

import Express from 'express'
import MovieRouter from './movieRouter'
import UploadRouter from './uploadRouter'

const app = Express()

app.use(Express.json())  // 对请求体进行json解析

app.use('/api/download', Express.static('public/upload'))

app.use('/api/movie', MovieRouter)

app.use('/api/upload', UploadRouter)

app.listen('9000', () => {
  console.log('服务器创建成功');
})