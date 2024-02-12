import React, { useEffect, useRef, useState } from 'react'
import data from '../data'
import { array } from 'yup';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import FileSaver from "file-saver";
import XLSX from 'sheetjs-style'
import _, { fill, set } from 'lodash';

function Collagedatatable() {
  const [filteredData, setFilteredData] = useState([...data])

  const [gender, setGender] = useState("");
  const [year, setYear] = useState([])
  const [department, setDepartment] = useState('')
  const [clgdata, setCollageData] = useState([...data])

  const [currentyear, setCurrentYear] = useState([])
  const [inpMerit, setInpMerit] = useState("")

  const [selecterMerit, setSelecterMerit] = useState("")
  const [sortMerit, setShortMerit] = useState([])
  const [downloadFormat, setDownloadFormat] = useState()
  const [meritCategory, setMeritCategory] = useState("")

  console.log(filteredData)
  const getFilterData = (collage) => {
    let result = JSON.parse(JSON.stringify([...collage]));
    if (gender) {
      result = result.map(cl => {
        let dept = cl.department_data.map(dept => {
          let yer = dept.year.map(year => {
            let stuFilter = year.student_data.filter(student => gender === student.gender)

            return { ...year, student_data: stuFilter }
          })
          return { ...dept, year: yer }
        })
        return { ...cl, department_data: dept }
      })
    }
    if (year?.length > 0) {
    
      result = result.map(cl => {
        let dept = cl.department_data.map(dept => {
          let yr = dept.year.map(yer => {
            let stuFilter = yer.student_data.filter(student => year.includes(student.admission_year))
            return { ...yer, student_data: stuFilter }
          })
          return { ...dept, year: yr }
        })
        return { ...cl, department_data: dept }
      })
    }
    if (currentyear?.length > 0) {
      result = result.map(cl => {
        let dept = cl.department_data.map(dept => {
          let yers = dept.year.filter(yer => currentyear.includes(yer.year))
          return { ...dept, year: yers }
        })
        return { ...cl, department_data: dept }
      })
    }

    if (department?.length > 0) {
    

      result = result.map(cl => {
        let filterdepartment = cl.department_data.filter(dep => department.includes(dep.department))
        return { ...cl, department_data: filterdepartment }
      })


    }

    if (inpMerit) {


      result = result.map(cl => {
        let dept = cl.department_data.map(dep => {
          let yr = dep.year.map(yer => {
            let student = yer.student_data.filter(i => (selecterMerit === 'Greater' ? (i.merit_12th || i.merit_diploma) > inpMerit : (i.merit_12th || i.merit_diploma) < inpMerit))
            return { ...yer, student_data: student }
          })
          return { ...dep, year: yr }
        })
        return { ...cl, department_data: dept }
      })
    }

    if (meritCategory) {
      result = result.map(cl => {
        let dept = cl.department_data.map(dep => {
          let yr = dep.year.map(yer => {
            let student = yer.student_data.filter(i => ((meritCategory === "Regular" && i.hasOwnProperty("merit_12th")) || (meritCategory === "D2D" && i.hasOwnProperty("merit_diploma"))
            ))


            return { ...yer, student_data: student }
          })
          return { ...dep, year: yr }

        })
        return { ...cl, department_data: dept }
      })
    }

    return result;

  }
const handleSortMerit = (e) => {
  let { name, value } = e.target
 
  if(name == 'sortMerit'){
    setShortMerit(value)
 }
 if (sortMerit) {
  
    
let result = filteredData
    result = result.map(cl => {
      let dept = cl.department_data.map(dep => {
        let yr = dep.year.map(yer => {
          let student = yer.student_data.map(
            stu => {
             
              return { ...stu }
            })
            let flatData = student.flat()
            const sortdata = flatData.sort((a, b) => {
                if (sortMerit === 'Ascending') {
                  return (a.merit_12th || a.merit_diploma) - (b.merit_12th || b.merit_diploma);
                } else {
                  return (b.merit_12th || b.merit_diploma) - (a.merit_12th || a.merit_diploma);
                }
              });

          return { ...yer, student_data: sortdata }
        })
        return { ...dep, year: yr }
      })
      return { ...cl, department_data: dept }
    })
setFilteredData(getFilterData(result))
      
   
}
}
  const handleSortContant = () => {
    let result = filteredData.map(cl => {
      let dept = cl.department_data.map(dep => {
        let yr = dep.year.map(yer => {
          let student = yer.student_data.map(
            stu => {
              return { ...stu }
            })
          let flatData = student.flat()
          

          let sortdata = flatData.sort((a, b) => {
            let fa = parseInt(a.contact_number)
            let fb = parseInt(b.contact_number)
            if (fa < fb) {
              return -1
            }
            if (fa > fb) {
              return 1
            }
            return 0
          });


          return { ...yer, student_data: sortdata }
        })
        return { ...dep, year: yr }
      })


      return { ...cl, department_data: dept }

    })
  setFilteredData(result)
    // setCollageData(sortdata)
    //     setFilteredData([...getFilterData(sortdata)])

    return result
 }
  const handleMatchContect = () => {
    let result = filteredData
    let matchContacts = []
    let stu = []
    result = result.forEach(cl => {
      let dept = cl.department_data.map(dep => {

        let yr = dep.year.map(yer => {
          let contacts = yer.student_data.map((i) => i.contact_number)
          contacts.map((ele, index) => {
            console.log(contacts.lastIndexOf(ele))

            if (!stu.includes(ele) && index !== contacts.lastIndexOf(ele)) {
              stu.push(ele)
            }
          })
          if (stu.length > 0) {
            matchContacts = result.map(cl => {
              let dept = cl.department_data.map((dep) => {
                let year = dep.year.map(yer => {
                  let data = yer.student_data.filter(ele => stu.includes(ele.contact_number))
                  return { ...yer, student_data: data }

                })
                return { ...dep, year: year }
              })
              return { ...cl, department_data: dept }
            })
          }

          return { ...yer, student_data: matchContacts }
        })
        return { ...dep, year: yr }
      })


      return { ...cl, department_data: dept }

    })
    setFilteredData(matchContacts)

    return stu


  }
  const handleChange = (e) => {
    let { name, value } = e.target
    if (name === "gender") {
      setGender(value)
    }

    if (name == 'year') {
      setYear(value)
    }
    if (name == "department") {
      setDepartment(value)
    }



  }
  const handleResetFilter = () => {
setCollageData([])
setFilteredData(getFilterData([]))

    setFilteredData(data);
  }

  const handleFilterClick = () => {
    let data = getFilterData(clgdata);
    setFilteredData([...data]);
  }
  const downloadFile = () => {
    let arr = []
    let result = filteredData

    result.map(cl => {
      let dept = cl.department_data.map(dept => {
        let yr = dept.year.map(yer => {
          let student = yer.student_data.map((stu) => {
            arr.push(stu)

            return { ...stu }
          })
          return { ...yer, student_data: student }
        })
        return { ...dept, year: yr }
      })
      return { ...cl, department_data: dept }
    })

    let flatData = arr.flat()
    if (downloadFormat === 'Excel') {
      const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
      const fileExtension = '.xlsx';

      const ws = XLSX.utils.json_to_sheet(flatData);
      const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, "table_data_excel" + fileExtension);

    }
    else {
      const fileType = 'application/plain;charset=UTF-8';
      const fileExtension = '.csv';

      const ws = XLSX.utils.json_to_sheet(flatData);
      const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(wb, { bookType: 'csv', type: 'array' });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, "table_data" + fileExtension);
    }

  }

  const fillIds = (studentData = [], key = '') => {


    let collectIds = JSON.parse(JSON.stringify(studentData)).filter(ele => ele.hasOwnProperty(key)).map((student) => student?.id ? parseInt(student?.id.split('_')[key === 'merit_diploma' ? 2 : 1]) : 'null')
    let missingNumbers = []
    let numbers = collectIds.filter(ele => ele !== null)
    console.log(numbers ,'numbers')

    for (let i = 1; i <= collectIds?.length; i++) {
      if (!(numbers.includes(i))) {
        missingNumbers.push(i);
      }
    }
    console.log(missingNumbers ,'missingNumbers')
    let nonFillId = JSON.parse(JSON.stringify(studentData)).filter(el => (el.hasOwnProperty(key) && (el?.id === '' || el?.id === undefined)));
    let regularDataID = JSON.parse(JSON.stringify(nonFillId)).map((student, index) => {
      student.id = key === 'merit_diploma' ? `${student.admission_year}_0_${missingNumbers[index]}` : `${student.admission_year}_${missingNumbers[index]}`
      return { ...student };
    })




    let fiiledIdData = JSON.parse(JSON.stringify(studentData)).map(ele => {
      if (!ele.id) {
        let fillId = regularDataID.find(data => data?.student_name === ele?.student_name);

        ele.id = fillId?.id;

        ele.email_id = `${ele.student_name.replaceAll(" ", "_").toLowerCase()}_${fillId?.id}@gmail.com`
      }
      return { ...ele }
    });
    let duplicateIds = []
    var valueArr = fiiledIdData.map(function (item) { return item.id });
    var isDuplicate = fiiledIdData.some(function (item, idx) {

      duplicateIds.push(item.id)
      let value = valueArr.indexOf(item) !== idx
  
      return value
    });
    if (isDuplicate) {
      console.log(`duplicate id is ${duplicateIds}`)
    }
    else (
      console.log('no duplicates id')
    )


    return fiiledIdData
  }
  const fillIdndEmail = () => {
    let result = clgdata.map(cl => {
      let dept = cl.department_data.map(dep => {
        let yr = dep.year.map(yer => {
          let fillRegularData = fillIds(yer.student_data, 'merit_12th')
          let fill = fillIds(fillRegularData, 'merit_diploma')
          return { ...yer, student_data: fill }
        })
        return { ...dep, year: yr }
      })
      return { ...cl, department_data: dept }
    })
    setCollageData(result)



    setFilteredData([...getFilterData(result)])

    return result
  }
  


  const sentences = ["Hello world", "How are you?", "JavaScript is fun"];
 
  const words = sentences.flatMap(sentence => sentence.split(' '));
   
  console.log(words);
  return (
    <div>
      <div className="row container mt-5 m-auto">
        <div className="col-lg-2 ">

          <select id="sector" className="select" name={"gender"} value={gender} onChange={(e) => handleChange(e)}>
            <option>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>

          </select>
        </div>
        <div className="col-lg-2 ">
          <select id="adyear" name={"year"} value={year} className="select" multiple onChange={(e) => setYear(Array.from(e.target.selectedOptions, (option) => {
        return option.value
          }))}>
            <option>Select Addmission Year</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>

          </select>
        </div>
        <div className="col-lg-2 ms-4">
          <select id="department" selected className="select" name={'department'} multiple value={department} onChange={(e) => setDepartment(Array.from(e.target.selectedOptions, (option) => option.value))}>
            <option selected value="">Select  Department</option>
            <option value="Computer">Computer</option>
            <option value="Automobile">Automobile</option>
            <option value="Civil">Civil</option>


          </select>
        </div>
        <div className="col-lg-2 ">

          <select id="currentyear" name={'currentyear'} value={currentyear} className="select" multiple onChange={(e) => setCurrentYear(Array.from(e.target.selectedOptions, (option) => option.value))} >
            <option selected value="">Current Year</option>
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
            <option value="Foutrh">Foutrh</option>
            <option value="Pass Out">Pass Out</option>


          </select>
        </div>

        <div className='col-lg-2'> <div className='me-5'>
          <span for="first_name" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Merit :</span>

          <input type="number"
            id="first_name"
            max={100}
            name={'inpmerit'}
            value={inpMerit}
            onChange={(e) => setInpMerit(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Merit" />
        </div></div>
        <div className='col-lg-1 mt-4  ms-3 '>
          <select onChange={(e) => setSelecterMerit(e.target.value)} value={selecterMerit} className="w-40 me-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected value=''>--Select Merit--</option>
            <option value="Greater" >{"Greater >"}</option>
            <option value="Less">{"Less <"} </option>
          </select>
        </div>
        <div className='col-lg-2 mt-1' >
          <select onChange={(e) => setDownloadFormat(e.target.value)} value={downloadFormat} className="w-40 me-5 bg-gray-300  text-gray-900 text-sm  focus:ring-blue-500 ronded-lg mt-1">
            <option selected value="">--Download Format--</option>
            <option value="Csv" >CSV</option>
            <option value="Excel">Excel</option>
          </select>

        </div>
        <div className='col-lg-2 mt-2'>
          <select onChange={(e) => setMeritCategory(e.target.value)} value={meritCategory} className="w-40 me-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected value=''>--Select MeritCategory--</option>
            <option value="Regular">Regular</option>
            <option value="D2D">D2D </option>
          </select>
        </div>
        <div className='col-lg-2  ms-4 mt-2'>
          <select id="sortMerit" className="select" name={"sortMerit"} value={sortMerit} onChange={(e) => handleSortMerit(e)}>
            <option>Sort Merit</option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>

          </select>
        </div>
        <div className='col-lg-8 d-flex gap-2 m-3 '>
          <button className='btn btn-secondary border border-secondary p-2' onClick={fillIdndEmail}>FillId & Email</button>

          <button className='btn btn-secondary' onClick={handleSortContant}>Sort contact</button>
          <button className='btn btn-secondary' onClick={handleMatchContect}>Match contact</button>

         <button className="btn btn-info" onClick={handleFilterClick}>Filter </button>
          <button onClick={handleResetFilter} className='btn btn-secondary'>Reset All</button>
          <button className='btn btn-secondary btn-dark text-white' onClick={downloadFile}>DownLoad!</button>


        </div>
        <div className="col-lg-2 ">
        </div>
      </div>


      <div className="container">
        <table className="table table-striped table-hover  table-bordered" id='table' >
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">Gender</th>
              <th scope="col">Ad Year</th>
              <th scope="col">Merit</th>
              <th scope="col">Ad Cat</th>
              <th scope="col">Collage</th>
              <th scope="col">Department</th>
              <th scope="col">Dep Head</th>
              <th scope="col">Year Head</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>


            {filteredData.map((clg) => {
              return (
                < >
                  {clg.department_data.map((dept) => {
                    return (
                      <>
                        {dept.year.map((year) => {
                          return (
                            <>
                              {year.student_data.map((student, index) => {

                                return (
                                  <tr key={index}>
                                    <td>{student.id ?? ""}</td>
                                    <td>{student.student_name ?? ""}</td>
                                    <td>{student.email_id}</td>
                                    <td>{student.contact_number}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.admission_year}</td>
                                    <td>{student.merit_12th || student.merit_diploma}</td>
                                    <td>{student.hasOwnProperty('merit_12th') ? "Regular" : "D2D"}</td>
                                    <td>{clg.collage_name}</td>
                                    <td>{dept.department}</td>
                                    <td>{dept.dep_head}</td>
                                    <td>{year.year_head}</td>
                                    <td>{year.year}</td>
                                  </tr>
                                )
                              })}
                            </>
                          )
                        })}
                      </>
                    )
                  })}
                </>
              )
            }


            )}


          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Collagedatatable