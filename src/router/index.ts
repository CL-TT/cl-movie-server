/*
 * @Author: CL
 * @Date: 2026-03-31 15:41:16
 * @LastEditTime: 2026-03-31 16:23:43
 * @Description: 服务器以及接口
 */

import Express from 'express'
import MovieRouter from './movieRouter'

const app = Express()

app.use(Express.json())  // 对请求体进行json解析

app.use('/api/movie', MovieRouter)

app.listen('9000', () => {
  console.log('服务器创建成功');
})