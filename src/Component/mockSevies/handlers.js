
import {http} from 'msw';
const handlers = [
    http.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {name: "anil" },
                {name: "same" },
                {name: "s2u" },  {name: "anils" }
            ])
        )
    })
]

export default handlers;
// import { http, HttpResponse } from 'msw'
// import { setupWorker } from 'msw/browser'
// const handlers = setupWorker(
//     http.get('https://jsonplaceholder.typicode.com/users', ({ request, params, cookies }) => {
//       return HttpResponse.json(
//         {
//           message: 'Mocked response',
//         },
//         {
//           status: 202,
//           statusText: 'Mocked status',
//         },
//       )
//     }),
//   )
  
//   // 3. Start request interception by starting the Service Worker.
//   handlers.start()