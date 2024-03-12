import { render, screen } from "@testing-library/react"

import User from "./Component/page/User"
import FirstTest from "./Component/page/FirstTest"
import { act } from "react-test-renderer"
import userEvent from "@testing-library/user-event"



// test('should  match string', () => { 
//     render(<User/>)
//     console.log('dafsg')
//     const btn = screen.getByText('username')
//     expect(btn).toBeInTheDocument()

//   })
//   test('should  placeholder string', () => { 
//     render(<User />)
//     const btn = screen.getByPlaceholderText('name');
//     expect(btn).toBeInTheDocument()
//   })
  test('should  placeholder string', () => { 
    const name = 'user'
    render(<User name={name}/>)
    const btn = screen.getByText(name)
    expect(btn).toBeInTheDocument()
  })
  test('should act', async() => { 
    userEvent.setup()
    render(<FirstTest />)
    const btn = screen.getByText('clicks here')
   await act(async () => {
      await userEvent.click(btn)
    })
    expect(screen.getByText('testing')).toBeInTheDocument()


   })