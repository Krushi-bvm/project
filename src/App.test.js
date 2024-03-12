// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { fireEvent, render, screen, configure, within, act } from '@testing-library/react'




import User from './Component/page/User';
// configure({ testIdAttribute: 'div-id' })
// test('should first', () => { 
// ;
// render(<sum/>);

//   expect(sum(10,20)).toBe(30)
//  })

// test("Example 1 renders successfully",  () => {
//   render(<FirstTest/>);
// let input = screen.getByRole('checkbox')
// let placeholder = screen.getByPlaceholderText('userCheckbox')
//   // expect(screen.getByRole('button', { name: /submit/i }))
//   expect(input).toBeInTheDocument()
//   expect(placeholder).toBeInTheDocument()

//   // expect(screen.getByLabelText(/First test/)).toBeInTheDocument()
//   // expect(screen.getByLabelText('Check'))

//   // expect(element).toBeInTheDocument();
// })
// test('should first', () => { 
//   render(<Homess2/>);

//   expect(screen.getByRole('costtable')).toBeInTheDocument()

//   // expect(screen('costtable')).toBeInTheDocument()
//  })
//  describe.skip('ui test group' , () => {

//    test('should first', () => { 
//     render(<FirstTest/>)
//     let checkInput = screen.getByRole('checkbox')
//   expect(checkInput).toBeInTheDocument()
//    })
//    test('should 2', () => { 
//     render(<FirstTest/>)
//     let checkInput = screen.getByRole('checkbox')
//   expect(checkInput).toBeInTheDocument()
//    })



//  })
//  describe('api test group' , () => {

//   test('should first', () => { 
//    render(<FirstTest/>)
//    let checkInput = screen.getByRole('checkbox')
//  expect(checkInput).toBeInTheDocument()
//   })
//   test('should 2', () => { 
//    render(<FirstTest/>)
//    let checkInput = screen.getByRole('checkbox')
//  expect(checkInput).toBeInTheDocument()
//   })



// })

// test('input event', () => { 
//   render(<FirstTest/>)
//   let input = screen.getByRole('textbox')
//   fireEvent.change(input,{target:{value:"a"}})
//   expect(input.value).toBe('a')
//  })

// test('test btn', () => { 
//   render(<FirstTest/>)
//   let btn = screen.getByRole('button')
//   fireEvent.click(btn)
//   // expect( fireEvent.click(btn))
//   expect(screen.getByText('updated data')).toBeInTheDocument()
//  })

// ww
// test('test in classcomponet', () => { 
//   const componetData = renderer.create(<CreateUsers1/>).getInstance()
//   expect(componetData.getUserList()).toMatch('Users list')

//  })
//    test('btn on click event', () => { 
//     render(<FirstTest/>)
//     const btn = screen.getByTestId('btn1')
//     fireEvent.click(btn)
//     expect(screen.getByText('hello')).toBeInTheDocument()
//     })
// test('getbyalll test', () => {
//     render(<FirstTest />)
//     const btns = screen.getAllByRole('button')
//     const options = screen.getAllByRole('option')
//     for (let i = 0; i < options.length; i++) {
//         expect(options[i]).toBeInTheDocument()

//     }
//     for (let i = 0; i < btns.length; i++) {
//         expect(btns[i]).toBeInTheDocument()

//     }
// })
// test('place holder', () => { 
//     render(<FirstTest/>)
//     const label = screen.getByPlaceholderText('lastname')
//     expect(label).toBeInTheDocument()
//     expect(label).toHaveValue('last')
//  })
//  test('get bt text', () => { 
//     render(<FirstTest/>)
//     const p = screen.getByText('helooooo')
//     // expect(p).toBeInTheDocument()
//     // expect(p).toHaveClass('test')
//     const div = screen.getByTestId('app')
//     expect(div).toBeInTheDocument()
//   })

//   test('default value', () => { 
//     render(<FirstTest/>)
//     const text = screen.getByDisplayValue('anil')
//     expect(text).toBeInTheDocument()
// })  
// test('default value', () => { 
//     render(<FirstTest/>)
//     const checkbox = screen.getByDisplayValue('anil')
//     expect(checkbox).toBeInTheDocument()
// })
// test('btn test', () => { 
//     render(<FirstTest/>)
//     const btn = screen.getAllByTitle('click')
//     for (let i = 0; i < btn.length; i++) {
//         expect(btn[i]).toBeInTheDocument()


//     }

// })
// test('img test', () => { 
//     render(<FirstTest/>)
//    const img = screen.getAllByAltText('img')
//     expect(img[0]).toBeInTheDocument()

// })
// test('match with string text', () => { 
//     render(<FirstTest/>)
//     const p = screen.getByText('Hello ' , {exact:false})
//     expect(p).toBeInTheDocument()


// })
// test('match and regex text', () => { 
//     render(<FirstTest/>)
//     const input = screen.getByText(/o world/)
//     expect(input).toBeInTheDocument()


// })
// test('match with function', () => { 
//     render(<FirstTest/>)
//     const div = screen.getByText((content , Element) => content.startsWith('hello'))
//     const div2 = screen.getByText((content , Element) => content.endsWith('world'))
//     const div3 = screen.getByText((content , Element) => content.includes('world'))
//     expect(div).toBeInTheDocument()
//  })
// test('should first', () => {
//   render(<FirstTest />)
//   const div = screen.getByText((content, Element) => content.startsWith('hello'))
//   expect(div).toBeInTheDocument()
// })


//  test('should  match string', () => { 
//     render(<FirstTest/>)
//     const btn = screen.getByText('hello')
//     expect(btn).toBeInTheDocument()
//   })

// test('findby', async () => {
//   render(<FirstTest />)
//   const queryby = screen.queryByText('data found')
//   const findby = await screen.findByText('data found', {}, { timeout: 8000 })

//   expect(findby).toBeInTheDocument()
// })
// test('custome query', () => {
//   render(<FirstTest />)
//   const div = document.querySelector('#textid')
//   expect(div).toHaveTextContent('hello world')
// })
// test('test with whithin function', () => {
//   render(<FirstTest />)
//   const div = screen.getByText('heloo div')
//   const subdiv = within(div).getByText('hellloooo')
//   expect(subdiv).toBeInTheDocument()

//   expect(div).toBeInTheDocument()
// })
// test('users event', async () => {
//   userEvent.setup()
//   render(<FirstTest />)
//   const btn = screen.getByText('clicks here')
//   await userEvent.click(btn)
//   expect(btn).toBeInTheDocument()
// })
// test('on change event testing', () => {
//   userEvent.setup()
//   render(<FirstTest />)
//   const el = screen.getAllByRole('textbox')
//   //    await userEvent.type(el,'anil')
//   //     expect(screen.getByText('anil')).toBeInTheDocument()
//   expect(el[3]).toBeInTheDocument()


// })
// test('act function', () => {
//   userEvent.setup()
//   render(<FirstTest />)
//   const el = screen.getAllByRole('textbox')
//   act(async () => {
//     await userEvent.type(el, 'anil')

//   })

//   for (let i; i < el.length; i++) {
//     expect(el[i]).toBeInTheDocument()


//   }

// })
// test('componnet props', () => {
//   const name = 'UserName'

//   render(<User name={name} />)
//   const user = screen.getByText(name)
//   expect(user).toBe()

// })
// test('props function', () => {
//   const testfunction = jest.fn()
//   render(<User testfunction={testfunction} />)
//   const btn = screen.getByText('button')
//   userEvent.click(btn)
//   expect(testfunction).toHaveBeenCalled()


// })
// test('api test', async () => {
//   render(<User />)
//   const api = await screen.findAllByRole('listitem')
//   expect(api).toHaveLength(10)
// })




