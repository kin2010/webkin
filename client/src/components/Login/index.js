import './Login.css'
import React, {  useState } from 'react'
import { Row, Col, Button, Typography, Input } from 'antd';
import firebase, { auth } from '../../Firebase/Config.js';
import { useHistory } from 'react-router-dom';
import { addDocument } from '../../Firebase/services.js';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { storage } from '../../Firebase/Config'

var options = ['kin@gmail.com', 'thong@gmail.com'];



// const styles = theme => ({
//   textField: {
//       width: '90%',
//       marginLeft: 'auto',
//       marginRight: 'auto',            
//       paddingBottom: 0,
//       marginTop: 0,
//       fontWeight: 500
//   },
//   input: {
//       color: 'white'
//   }
// });




const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();
// const imageURL = [
//   'https://i.ytimg.com/vi/OmumcMta7ho/hqdefault.jpg',
//   'https://images-na.ssl-images-amazon.com/images/I/710WW1XPhaL._AC_SL1280_.jpg',
//   'https://media.lamchame.vn/images/2021/02/05/photo2021-02-0420-15-50-16124446285711630245754(1).jpg',
//   'https://danviet.mediacdn.vn/2021/1/29/0-16119126945131798344010.jpg',
//   'https://lh3.googleusercontent.com/proxy/ysiokgNmqUbW5fzqCjbz9hD8ZVMdarZumndrYYfiMypEeYe1FmXPrnbebkdK6vJhN9PvpVPxOjF7tF1GHjLOljCJ0nkKjXaR5EfY6aH-cJlkqbA1gxSSJZ0vbzPV10EQ4B-rIMXMv2fxnpuhxogxdaCEqP68HRY7f_uxGmOJb3u2Bc2aoQ2zD6RJARg0xAVnaadPqUINdJTIgL4SKQAoSzxn',
//   'https://znews-photo.zadn.vn/w660/Uploaded/bpivpjbp/2016_09_26/thu_1167_1445311073_ujef.jpg',
//   'https://static.tuoitre.vn/tto/i/s626/2009/04/13/uhvzjeeG.jpg'



// ]

export default function Login() {
  
  const [result, setResult] = useState([]);
  const handleSearch = (value) => {
    let res = [];

    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', 'kinzia.com'].map((domain) => `${value}@${domain}`);
    }

    setResult(res);
  };

  const login = () => {
    return (
      <div className="login">
        <Row justify='center' id="row">


          <Col span={16}>
            <Row className="roww">
              <Title id="ti" style={{ textAlign: 'center' }} >
                Login
              </Title>
            </Row>
            <Row className="roww">
              <Col span={8}><div className="text">Name :</div></Col>
              <Col span={16}><div>
                {/* <Input
                  className="in"
                  onChange={handleInputChange}
                  onPressEnter={handleOnSubmit}
                  placeholder='Nhập Email...'
                  // bordered={false}
                  autoComplete='off'
                /> */}
                    <Autocomplete
                  id="custom-input-demo"
                  onChange={(event, newValue) => {
                    console.log(newValue, event);
                  }}
                  freeSolo
                  onInputChange={handleInputChange}
                  options={options}
                  renderInput={(params) => (
                    <div ref={params.InputProps.ref}>
                      <input placeholder='abc@gmail.com (k cần email thật ) ... 😉😉😉' style={{ width: 186, height: 44, borderRadius: 20, paddingLeft: 30 }} type="text" {...params.inputProps}


                      />
                    </div>
                  )}
                />
              </div></Col>

            </Row>
            <Row className="roww">
              <Col span={8}><div className="text">Pass :</div></Col>
              <Col span={16}><div>
                <Input
                  className="in"
                  onChange={handlePassChange}
                  onPressEnter={handleOnSubmit}
                  placeholder='Nhập Pass...'
                  // bordered={false}
                  autoComplete='off'
                />



              </div></Col>

            </Row>
            <Row className="roww">
              <Col span={12} className="col-a">
                <div className="aa"> <Button
                  className="bu1"

                  onClick={() => setIsDangnhap(false)}
                >


                  Đăng kí
                </Button></div>
              </Col>
              <Col span={12} className="col-a">
                <div className="aa"><Button
                  className="bu1"

                  onClick={() => handleOnSubmitLogin()}
                >


                  Đăng Nhập
                </Button></div>
              </Col>

            </Row><Row>
              <Col span={12}>
                <Button
                  className="bu"
                  onClick={() => handleLogin(googleProvider)}
                >
                  <img className="icon" src="assets/icon-google.jpg" alt="Facebook" />Google
                </Button>
              </Col>
              <Col span={12}><Button
                className="bu"
                onClick={() => handleLogin(fbProvider)}
              >
                <img className="icon" src="assets/icon-facebook.jpg" alt="Facebook" />Facebook
              </Button></Col>

            </Row>



          </Col>
        </Row>
      </div>
    )
  }


  const dangnhap = () => {
    return (
      <div className="login">
        <Row justify='center' id="row">


          <Col span={16}>
            <Row className="roww">
              <Title id="ti" style={{ textAlign: 'center' }} >
                Register
              </Title>
            </Row>
            <Row className="roww" id="idrow">
              <Col span={8}><div className="text">Email :</div></Col>
              <Col span={16}><div>
                {/* <Input
                  className="in"
                  type="email"
                  onChange={handleInputChange}
                  onPressEnter={handleOnSubmit}
                  placeholder='vd:abc@gmail.com (k cần tk google thật ) ... 😉😉😉'
                  // bordered={false}
                  autoComplete='off'
                /> */}
                {/* <AutoComplete
              
                allowClear={true}
                  
                  onSearch={handleSearch}
                  
                  onChange={handleInputChange}
                  placeholder='vd:abc@gmail.com (k cần tk google thật ) ... 😉😉😉'
                  renderInput={(params)=>{
                      <div ref={params.InputProps.ref}>
                        <input style={{ width: 200 }} type="text" {...params.inputProps} />
                      </div>
                  }}
                    *
                >/}
                  {/* {result.map((email) => (
                    <Option key={email} value={email}>
                      {email}
                    </Option>
                  ))} */}
                {/* <Input
                  className="in"
                  type="email"
                  onChange={handleInputChange}
                  onPressEnter={handleOnSubmit}
                  placeholder='vd:abc@gmail.com (k cần tk google thật ) ... 😉😉😉'
                  // bordered={false}
                  autoComplete='off'
                /> */}
                {/* </AutoComplete> */}

                <Autocomplete
                  id="custom-input-demo"
                  onChange={(event, newValue) => {
                    console.log(newValue, event);
                  }}
                  freeSolo
                  onInputChange={handleInputChange}
                  options={options}
                  renderInput={(params) => (
                    <div ref={params.InputProps.ref}>
                      <input placeholder='abc@gmail.com (k cần email thật ) ... 😉😉😉' 
                      style={{ width: 186, height: 44, borderRadius: 20, paddingLeft: 30 }} 
                      type="text" {...params.inputProps}


                      />
                    </div>
                  )}
                />


              </div></Col>

            </Row>
            <Row className="roww">
              <Col span={8}><div className="text">Pass :</div></Col>
              <Col span={16}><div>
                <Input
                  className="in"
                  onChange={handlePassChange}
                  onPressEnter={handleOnSubmit}
                  placeholder='Nhập Pass...(> 6 kí tự) 😉😉😉'
                  // bordered={false}
                  autoComplete='on'
                />



              </div></Col>

            </Row>
            {/* displayName */}
            <Row className="roww">
              <Col span={8}><div className="text">Name :</div></Col>
              <Col span={16}><div>
                <Input
                  className="in"
                  onChange={handleDisplayChange}
                  onPressEnter={handleOnSubmit}
                  placeholder='Nhập tên của  you😂😂😂...'
                  // bordered={false}
                  autoComplete='off'
                />

              </div></Col>

            </Row>
            {/* urlProfile */}
            <Row className="roww">
              <Col span={8}><div className="text">Avatar :</div></Col>
              <Col span={16}><div>
                {/* <Input
                  className="in"

                  onChange={handleUrlChange}
                  onPressEnter={handleOnSubmit}
                  defaultValue="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRUVFRUYFRgYGBgYGBgYGhgYGBIZGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjEkISQ0NDQ0NDQ0NDE0NDQxNDQ0MTQ0NDQ0NDExNDQ0NDQ0NDE0NDQxNDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAYHAQj/xAA6EAACAQIEAwUGBQMDBQAAAAABAgADEQQSITEFQVEGEyJhcRQygZGhsQdCUsHRYuHwM4KSFSNywvH/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAlEQACAgICAgICAwEAAAAAAAAAAQIREiEDMQRBIlEyYRNxoYH/2gAMAwEAAhEDEQA/ANNoII3hrXERd7LJcLqZnHrMHG5WU+zf+Dr4RI8cTwxjhQ0EX7S6ITHLopmmBhn+Mad9JrftfjPrHmxekywZkNK8ap1JSJiYwuMmMoOySwqvpDBtFlUK+aWa8vSdXFGomi6F2cliALkmwA3JmxYXs/dPG7ByNAouq+R6xLs7QDVmY/l92/6jsfgLzcl0veY8kqdI6OHijJWznGJwrI7I4sVPwPQjylphaXhlv2nwquqVB7y+E+anY/A/eV9D3ZrxyUo2iZQxlRVYqnrBqLTzHVfFILUmcrs532Hzw1Myv7zUR9dpUY6Y0eu8CzyLtAu8iMdkole5lnwrhxrVFTZd2PQD+ZW0Vm18BdaQYNo7EG3MC2l/nK5JYxOnijk69F1V4PQK5e6Sw00UA+uYa3mkdoOGmg+hJRr5Cd9N1PmJvqYoETXO1bq1JlO4sy+oOv0JmUZNvZrywi46XRpIOsMDpEQ9jDHEaTVxOJmOdYV2sInTq3aN4kaTaMaRUT3A6mGx72EHwpJ5xVTKK9FWtTWWuFfSVFGmZY01sJLSEGxjXg8EmsFUqRzBLHFAhvLPYS0yMopcT7sLwWmcw9ZN8KTpLfg+Bym9pOSJStm28I0AvFu1VQd2Y1gRaIdo6BZJLki2tHK398+sY5Rt+GnMfWH/AOnGNTRiUwfSeCpH24WZ4vDDJyiTYTBcpsqUNB6SlwmDIImzYcaD0lqSNF0V+FxXdv6t+02AcSDC3zmv1sKWcj9Rt8eUDiM9FlLaDaYTSkzo4ZfEvKuJDkoxsGGUHkDe4J+IEGtMqGVtCNDEsO4cj6GXlennpo/P3G8yuxPw+0jjlhLF+zScco5fRpvEyM0WWrLHiODYmI+wNNm0cMuyNM3YS5CeGV+HwTAy4Wmcto01Q10U1QGeIkdfDHpMSgZCkhJoc4VhL5nOyWsD+ZzsPhv8oGriGL+d9bTYkwmSlSQizEF29Tt9LCa9XUZzsBffa/xmWWc3+j0Ixxgv2WqY7IL5jcnnvBcVoM9J3tshPPpK+kxdwoGl/jNypYDNSKkaFGFvVbRtY0w7TRySqusgwNpc1sCekW9jM6ckcNIRwFPxiWmLpyWBwVmvHsRhrylJDSFeFJLPFYVSDB4PDZRAY+sw2g6ZaePYPAcKFSoEB9Zc8W7PqiFk0IHzlDwrGvTqK/zmw8U4/nRlVdWFooKKWwlJPo0ixJlrgUMjhcF1lvhMKI7EkCyz2NPS1MyGQ6CUsKI6iADSeKIQicOTOZTaDYWtYxjF1Ay2lfJgEwcmV/K6E2wgJ2kThB0lolOS7uRkZ7KsYMdJ57GOktu7md1DJiplUMGJMUbSy7ued1HmwtiuCwt3T1jfHuCq6fDfpHOF0PEWOyj76R3ieMQJluNdJfFeVnd46qH9s0DAcMqJVXMLqNb+VpsvCrMKiHZj4fIjUfWTwNPvMyIMzaKNRuT06ec3XgnZilQUE/8AcewuzDS/kOU0lxSnK1qjeU4wjT9nPamGBOokBhR0nXXwVM700Pqqn9oo/AsO2ppL8Lj7GU/Hl6Z50k2cu9kEw0pv9bsjSPus66+RHptDYfsrQWxYFyP1HQ/ARLhmTjI5saY6Sx4d2fq1CpWk2W4JLDKCPK+86hQwqKLKiqOgAEPLXj/bKjGndnN+M4d1cZ1Kg6A8vSUVHgw1Llt9yNN+U69icMtRSrAEHrOb9teF1KAV6bsFGht+Ybi/KQuHCVrpnoQ5lNU+wOAw6lwlMBRpmfmZtfs4UACaDw3jbsVBy35cpstPjIDZSwJIIUDdiBewHwMORWim62avXw4zN6n7xc4UdJcmhczPZhOfI8vZTLRtykykt/ZRBNhZebKuSK7bSAqUA0sXwxkBhzBzZLkys9jEicLLJ6Rke6iyZOTFFp2hsOdZMpPFEv8AkZouZoYyzJHNMizY/wCYbRIwtERI4jWNJW0kWZpxCigJMUwIo+IMGa5haKyiPgiTtEVqaSYxETcR5xDsYM1IM1bzLSckRKX0S7ySFSBsJ6BFaJsHxXiDUqJdQSSwWw0vuT8gJW4/EvVRcoYtYG3M9PjNjTDIUV3NyjNkB2zEDxHrtLbsv2fGc16ni5oDffmZ18LUlS7PQ4/jDJlv2P4a1LDoaihXIuQB7t9r+c2KKY3FrSQu2w2HXTb6fSc7xf4nrmYU6bVVU+Oois1NQNyX6Ac9p2JGLbk7Om94J7KPB8SRwhAIzIj/AO11uP4lzS2gS9BZk8mGAHl5DvRz9JDENlF5zvtr2pekjBNCLWbTf8uvyjoaVnS4lxTh6V6bUnF1YW8x0InIqHa/GYR19oZHSwJeixcrmA1dCfFYHUDKec6xwbiS4iktRCpBAN1Nwb6gg9CLHXXWxsQRBqtMOto4/wAX4I+GrlWvb8h3GQc4fDcIaoy10YZ0KsqMLZgpFwDyJ1nWeKcOSshV1Btsek0bK1GrZihUa32J+E4+aTg/7OuElOO/Qri6mV3Xax26c7SArQFdy7s53YkzwJOWzzZS26GhWki4iTGQWrGhKTHWcSGcQGeeLHSC7GcgMBXQSYe08JvHoBXKIM2jjUYE4cw0TQOZJ93MhaED7xZJa9pXAkSTNIdAWArCS7wSnzGGpExOIixZpixTvLQy1onFgMXk8xi6uIwXFpPQ0D7+FWrFxSvJgWi7GOUK5FxYEHe+w850jAkd2mXUZVt56bzmFIXnTOC0yuHpA75BpOzxGsmjeMpOOL6NN/FH2ipS7qkQiMozuxK5rt7gI6hdfKah2W7OcQfwI/cUT4ahy6ZTYMFBUZjpbLfnyvO0OATqtx57fKGR78rTvLTNawnZnIlMK7OyIiMzn3wlsjEbZhZflLbH8UpYSmGrOB0A95z0Vf3lhVqBVJOlp8//AIhcWFXE4gPUIKnLTGuijaw897iAN2dKxH4gLZmRAoGxY5i3TQWt8zPcH2/FgaqCx3KmxA62P8zhPD8U2R1ZjYbX6yPEsS5ZVzNlAG19jzj0FH0/h8XRxdPNTqXXY5TZlPQ9DFK3ZnDMCHoo99DnGa+/8zlX4b8WyYmmlOoWVlIqA8xlJGnkRe87hTcMoI5iJgm0c74n+F2Fdw1JXpqSc6pUBtzBUOraeVxNh7K9nUwSuiOzK1rBj7trnbYasdpsDtaRTXXnEDbMBOs51x+sHqvpYqxF/gL/AFvOksNDOUcRYmrUNt3fTS/vHlObyukZym4ql7BASWaA7y24ku8nFTMCTQTLJM0EzwdhZJVhlEU7+0mlcmFDGrTzNaD72RZ7ylEdhxiYJsRcxZ5GmhvHQWOZ5kHeewCxBxMyyJqi9oVXERAtU0izYyxjNWpeejCqwjdLsDylVzCMUqZnlCmF0jaOsT/QMiKRkgk9bEAc4AYkScWwDZ7TwNeDdrwYvEo0BbcPQl0W18zKLepnVMMbqD/g6TlvZ4k4iiP6x9NZvNXixNRaVOxOtzyRRudOfQTt8WKSb+zfj2i7ehfnJIgWCpPp9zA1cUuxuOU66LPOIVAUbS/K3W84L2oxtqzs6K6sxuGG630tzE7LxXGoqMSdAL8+hIFvhOGccbPVe50JO5ldIaKDEYi9woyr0/nrG8FikvasmcDYA5ST0uOXlFMThsoJHW3wO0nToC6nQn/5aQWb92NrA4lHCKlwQABZU02Gm+u87XgXAUCcH7G18lQXJUE2DWJC766eq7+U7Vw2uGRW5WFvLfX/ADpK7RDLeol4NEImU387zKlbLrbSIRItbeck43TZMRVRhrnYjzDHMp+RE6q1RWBIPrNG7YYQd4jHdksx6lSRf5ETn8hfG/ojkWjVlk1cSVSlA2tOBzSMaGCRIOsidZ5aLNARIEEHsYQJJiiJSkgBh7yRMOlITyoglpoAHeQqMLQZoXhEp2jtFWe557IWmQyQtFeuGjNPDwaXh0JnM5Mi2RfDC0gq2kql4FA15SbESZTIBGjAjNFQY82ikmVVSi5kEpMDrL0pBsgjzfsYpTQ2njvaMuwEWahmhYF32RfNiUtyVyf+BH7yt7TdsKuExhVEXILeEi5qaXLFuQFyLCZwasaFVXvoL3HUEaiA/EfBh6aYtBmCOA9tMyOfCT6NYfGdvjyWNLs1466N+4J2upYhFbMFY6FSQDmtcr9RDV8aBdg4t0JGnPe84viUygVKbFSy3DDodZX1OMV2BzOb89TrN8jqlwtPR0XtL2nQKUWopuSSF15Wyk9LEn+05zjuKUzfTMfFtYak239P3lPiqrsxuSSdfvFmQ9JWTZDjQ5ieIlhlAyi977k2sfuIWlxFSDmU5uRX1vz9PrKvKZloCN34NxVAQVaxuLk8rAWuvznX+C4/PTT3SdNiNv8ABefNlMkG40mzcF7UvSKlrkAk3u3PfS/mYXQ1s+icMPFoLb8/PpGcRVABJa1pySh+IiqAT4iBzv8ACV3H+0+JxaFUORLZmBtmIA3J5AEHTz+SyQLjk+jo2G4ir1c1OoH1AcKQQvS9tjoZW9r8SDVQdEF/iSftaan+FuCN6mJuwU2prf8AObhnJ5MBYC/W/WXvHXV6zkG48IHoFAnP5L+NfbMeR6Kipibm0iVvJNRAN5jGcDVmJJENoMkgxqi0I6CCSQCJqzFeFNEXhkwwgwSB02knUmFanaQzGNMYF1IkADGmgWMeQUD0mSOaZC0FE2YT1HE8FMXkgoEKQKJ45gCCdoy9RR0g1riNRQNJCrXEmmKtDMwaDOEBhSCg9LE3hGN4stAiektJbCjKiQYJG08rUnO0nhqRG8LrsdMUcvebJ2eTOlWk4Doy6qdQwOjC3y+UXSkDyjvDagR81thr6c5rx8iUky4raRqFfh/s9Q4ap4lYsaLWJGS4y+L9QvY+frNX4vw9qT2YHK3utyM652r4EmITfKR4kcfkY2OtiPCbAH9pqGHxGdfZsWgpuCQrbqw5XPI2+e/PTvPQ4pqSxl36NY4dwzOrtYHKob68pY4DgveIGVTr1+3zE2Ts5wFkqVUbKyuoKKSQfDcm2liPEOc2Dsxw3KhDLls7ixG3iJt9Y47kxuKTpmlYnseclwovKtOzDXIykkWv8Z2kYUEZbRVOGqHY23C/vNKJcInKcR2RcKGK7wC9nTldcpuFLDT9IJIPynaKmCBGW3SUuOwOVagGhZQg62IYEjzF5ElrQ1GPo4mlJi4RRck7Tc34a4pph0/1K7KhsP8ATU6uW8goJ/wSxHDqOBQ1nXNUOiD8zMb2HQGXnYvA5wcVUHjcZE0IFNASSEvvmvqeeUSf2VyNccWvb/wJxHCezUKFGjdECED9RA3JP9RuTKplJ/z4/vL3tbih3ip+hB821/iUIxQnBzT+bPLk9i1RSINQbxlnBmLTmV30QeIphWubTFM8avblHYHq04VKloMV9IFgSYWOhhsQOci2IXlFa6G0DRPWHYDiV8xhWUQNIASb1BBxHZndCZIZpkMQsCr3F7yJPnIJSIEm1PSGQhZlvD0aUGHAhVrCUmIGRYwwrWEXOpnlRZWhDaVpLv4ot4emOUWhpjaYkW2kXqCJVVZTFMRVaTimx5Fz7WFjvCB3rMRso18ydhNPAdyFFySQB5kzpnBeHLQoBPzbsep5wxSOnx4uTv0hsU7BV/pUdeVpqXaTgSVLhgQdQrDdfT+NjN1dgShGxWL8QwwYEEXBnopa0D0zkNHiWKwhemzFgqlkLXKgaWKG4IFr6A+U7DwxGyIXFnKqW56kC+vP1mocX4S1bD1aBBd18dPTxFAfGqnrbWbxg3BUW10mkPs6OOTkt+goWQHvt/4r92hCbW1gwfGfNR9CZZpQUDWab2/4rUwwpNTUEuzC5sTdbECx0sbm58puKHz6xPi+GRsjsoYoSUv+ViLXH1ky6Jk3HaNE4BwOvXcV8W5a6tanzGa2/JdOQA5azoOEojMqAWCgAAbADkILAUbD7yw4fT1J6mZnM5OW2c87WU2XE1Awtc3XzU+6ZSOh5TqPbbhAq0e8UeOmCfVfzD95zlKYnBzxcZP9nNNUwNGm28YZ2taEQWg3YznViMw+YbwhS8WfE6SeFxmuojChkUwJgqKIR6lxoIROH51ve0aCiDuhEWCrynlWlbQnWLFDraV0DDuwEC7X2gQ99J4EIMYiWczIUJMgOyanSCa5gFxeloJMTrBRQBnomKVCQZZ0nBmVKSnWPQitDm15i1W5x5QouJ53IO0doKA0cT1jdKsCRA1MF0kaeHI2kWmBbPYjWL1KKmRVCdJsvZvhAY944uq+6DzbrJxd6ZcIOcqRDg3AwmWo4sd1X/2Mu698umvl1jGUu9h6S6TChQNJvx8LnZ6CceFJIpsPhHVAGtofDbkDrYwmIS6y1cXFolVTed8YqKpHNJ27NarVchzDcf5bzEb4NxKncpmAB90bZf6T+0FxSkJrVbCkNcX/AI8osnFlQlizoLHWAYXb/b9j/eatw/j7p4KgJ5Bv0+Rl7QxqHUsBfzHOaRkmdsUmrWx+kILibiyDmTt6A3MWr8RUXynMeXS8jgabOcz6n7ekUpLpGXNJJV7LGkMqxzhqeG/U3ixF9JZ0EsBJXZyjFrixnOe0nADRcugvTY/8D09J0ZTB16IdWVhcESObjzj+xOKlpnJRTksg5xrjWDbD1Sh906oeo6HzErypJnnbRi/i6ZFqC9RMNBFi2JpMDvCpTuBcwe+wTLCg65bQorlVIGsqXBGxhRXNoxMTxTtmJklxwtlP0kmOaZTwSk3itNbAg1K/iAgqlW0fcAaRKut470DPO8MyQzzIthQhT1Mcp4W9jBphSOsMHZZq4luDQyEtpIul4Euxk1czGS2ZtBUoDnCd4qmQuTFmpEmQIslcGRCawNPQQ61JL0IdwWGLuqAbn6c5u6oEQKugGglF2Yo3zOR5D95eVmm0Fqz0vHhjG/bCcO1f0G8uGMquFJqxlm09DgVQI5n8jIpXSM54CrNjMp8VQ5yqrUb8psOIS8r6tEgbSWgKOpw8WP8AaB4fhQC2Zbi/hJllUpvrYcvlIUKLl7DQaX8/OQNNroaw9MG1hbyljhwRpaQwuEPM848y2lJCD4ZOceWV1J43SfWNANLMDTBtIg6ygKPtbw4VadwPEviHw5Tn2e06zjFus5b2iod1WYDZvEPjvPP8mOMrXsnljcVL/hW1K195Ba3SERAZIUgJzXZhREVesg9YEaQxS8klBRLT0Aml5JKrAxpwvKRSmDChCzYkmLriNTHzRGsVbD63jGA72ZGPZRMj0Bc06Kme1sGsyZNE3RumxdsOo5QDUxfSZMmEuzJ9hRbQQb0xMmSSQCpaeVCRMmTCXZRv3ZtbUU62v84/iKZI0MyZOyH4o9SHoscDTyoIzbSZMnpQ/FHJP8mLPBM88mQZILvQTaeVFNtJkyMAHd8uZhe5At8pkyADCNYWtA1VJ1mTImNGU7x+gk8mQQMZBhFWZMlCMfYznvbWkLI3QkfSZMnL5XotfgzS/adZJMUb2mTJwHJ7DVa55QWZjaZMloB6nT01mKJkyUyQYrawGIrcpkyCGKd+Z5MmQEf/2Q=="
                  placeholder='Nhập url vào đây ( địa chỉ ảnh )...'
                  // bordered={false}
                  autoComplete='off'
                /> */}

{/*                 
                <Autocomplete
                  className="custom-input-demo"
                  onChange={(event, newValue) => {
                    console.log(newValue, event);
                  }}
                  onInputChange={handleUrlChange}
                  options={imageURL}
                  freeSolo
                  renderInput={(params) => (
                    <div ref={params.InputProps.ref}>
                      <input placeholder='URL image 😉😉😉 (copy mạng)' 
                      style={{ width:186, height: 44, borderRadius: 20, paddingLeft: 30 }} 
                      value={url}
                      
                      type="text" {...params.inputProps}


                      />
                    </div>
                  )}
                /> */}




                  <form >
                  {/* <form onSubmit={handleUpload}> */}

                  {/* <label htmlFor="fileupload">Chọn ảnh</label> */}
                  <input id="fileupload" type="file" onChange={handleChange}  name="avatar"  />

                  {/* <button disabled={!file}>upload to firebase</button> */}
                </form>

              </div></Col>

            </Row>





            <Row className="roww">

              <Col span={12} className="col-a">
                <div className="aa"><Button
                  className="bu1"

                  onClick={() => setIsDangnhap(true)}
                >


                  Đăng Nhập
                </Button></div>
              </Col>
              <Col span={12} className="col-a">
                <div className="aa"> <Button
                  className="bu1"

                  onClick={() => handleOnSubmit()}
                >


                  Đăng kí
                </Button></div>
              </Col>
            </Row><Row>
              <Col span={12}>
                <Button
                  className="bu"
                  onClick={() => handleLogin(googleProvider)}
                >
                  <img className="icon" src="assets/icon-google.jpg" alt="Facebook" />Google
                </Button>
              </Col>
              <Col span={12}><Button
                className="bu"
                onClick={() => handleLogin(fbProvider)}
              >
                <img className="icon" src="assets/icon-facebook.jpg" alt="Facebook" />Facebook
              </Button></Col>

            </Row>



          </Col>
        </Row>
      </div>
    )
  }




















  // const history = useHistory();
  const [isDangnhap, setIsDangnhap] = useState(true)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')
  const [url, setURL] = useState('')

  const [file,setFile]=useState(null)

  function handleChange(e) {
    setFile(e.target.files[0]);
    console.log(file)
  }
  const handleLogin = async (provider) => {


    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
    console.log(user)
    if (additionalUserInfo?.isNewUser) {
      // db.collection("users").add({
      //   displayName: user.displayName,
      //   email: user.email,
      //   photoURL: user.photoURL,
      //   uid: user.uid,
      //   providerId: additionalUserInfo.providerId
      // });
      addDocument("users", {

        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId

      })
    }
    //ghi vao db

  };
  const handleInputChange = (b, e) => {
    //  console.log(e,options.length)
    //xoa ar chua len 2 cai + cai moi
    const newOption = String(e) + "@gmail.com"
    options = options.splice(1, 1, newOption)

    options.push(newOption)
    //  console.log(options)
    setEmail(e)
  }
  const handlePassChange = (e) => {
    setPass(e.target.value)
  }
  const handleDisplayChange = (e) => {
    setName(e.target.value)
  }
  // const handleUrlChange = (a,e) => {
  //   setURL(e)
  //   console.log(e)
  // }
  const checkNull = () => {
    if (email === "" || name === "" || pass === "" || file === null) {
      alert("Hông được để trống  😡😡😡😠")
      return true;
    }
  }
  const handleOnSubmit = async () => {
    console.log(email, pass, url, name)

    if (checkNull()) {
      return
    }
    try {
      const { additionalUserInfo, user } = await auth.createUserWithEmailAndPassword(email, pass)
      if (user == null) {
        alert(" Format sai : vd : abc@gmail.com (k cần tk google thật ) , mk > 6 kí tự 😑😑😑😐")
      }
      if (additionalUserInfo?.isNewUser) {
         

        if (file != null) {
          const ref = storage.ref(`/images/${file.name}`);
          const uploadTask = ref.put(file);
          uploadTask.on("state_changed", console.log, console.error, () => {
            ref
              .getDownloadURL()
              .then((url) => {
                // setFile(null);
                // setURL(url);
                console.log(url)
  
  
  
                // 
                
              addDocument("users", {

                displayName: name,
                email: user.email,
                photoURL: url,
                uid: user.uid,
                providerId: additionalUserInfo.providerId

              })
        
  
  
  
  
  
              });
          })
        }








        // addDocument("users", {

        //   displayName: name,
        //   email: user.email,
        //   photoURL: url,
        //   uid: user.uid,
        //   providerId: additionalUserInfo.providerId

        // })
        alert(" Đăng kí thành công 💖💖😂😂😂")
      }
    }
    catch (err) {
      alert(" Format sai : vd : abc@gmail.com (k cần tk google thật ) , mk > 6 kí tự 😑😑😑😐")
    }

    

  }
  const handleOnSubmitLogin = async () => {
    // auth.signInWithEmailAndPassword(email, pass)
    // .then(() => {
    //     alert("dang nhap thanh cong")
    // })
    // .catch((error) => {
    //    alert("erroor")
    //    console.log(error)
    // });
    console.log(email, pass)
    try {
      auth.signInWithEmailAndPassword(email, pass)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log({ google: user })
          // ...
        })
        .catch((error) => {
          // var errorCode = error.code;
          // var errorMessage = error.message;

          alert("Sai dòi sai dòi 🙄🙄🙄")
        });

    }
    catch (error) {
      alert("Sai dòi sai dòi 🙄🙄🙄")
    }

  }
  return (
    <div id="au">
      {isDangnhap === true ? login() : dangnhap()}
    </div>
  );

}
