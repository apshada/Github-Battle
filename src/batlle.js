import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { IonCard, IonThumbnail } from '@ionic/react';
import styled from 'styled-components'
import battle from './battle.png'
const Block1 = styled.div`
display : flex;
flex-direction : row;
justify-content : center;
align-items : center;
height: 400px;
  @media (max-width: 768px) {
    height : 400px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
  }
`;



const Block = styled.div`
display : flex;
flex-direction : row;
justify-content : center;
align-items : center;
height: 400px;
  @media (max-width: 768px) {
    height : 800px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
  }
`;

const Card1 = styled.div`

height : 300px;
width : 250px;
padding : 15px;
@media (max-width: 768px) {
   height : 600px;
}

`;

const Card = styled.div`

height : 50px;
width : 250px;
padding : 15px;
  @media (max-width: 768px) {
   
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
  }
`;

// const Detail = styled.div`

// height : 50px;
// width : 250px;
//   @media (max-width: 768px) {
   
//     display : flex;
//     flex-direction : column;
//     justify-content : center;
//     align-items : center;
//   }
// `;



const Battle = () => {

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    
    //user 1 data
    // const [star1, setStar1] = useState(0)
    const [repo1, setRepo1] = useState(0)
    const [follower1, setFollower1] = useState(0)
    const [follow1, setFollow1] = useState(0)
    const [name1, setname1] = useState('')
    const [cal1, setCal1] = useState(0)
    const [data1, setData1] = useState(false)
    const [url1,seturl1] = useState('')
    //user 2 data
    // const [star2, setStar2] = useState(0)
    const [repo2, setRepo2] = useState(0)
    const [follower2, setFollower2] = useState(0)
    const [name2, setname2] = useState('')
    const [cal2, setCal2] = useState(0)
    const [data2, setData2] = useState(false)
    const [follow2, setFollow2] = useState(0)
    const [url2,seturl2] = useState('')

    const [winner, setWinner] = useState('')

 
  
   const  getProfile1 = () => {
      
    
        axios
          .get(`https://api.github.com/users/${input1}`)
          .then(resp => {
              console.log(resp)
              setData1(true)
              setRepo1(resp.data.public_repos)
              setFollower1(resp.data.followers)
              setFollow1(resp.data.following)
              setname1(resp.data.name)
              seturl1(resp.data.avatar_url)
              // setCal1(follower1)
              // setCal1(cal1 + repo1)
          })
      }

      const  getProfile2 = () => {
    
        axios
          .get(`https://api.github.com/users/${input2}`)
          .then(resp => {
              console.log(resp)
              setData2(true)
              setFollow2(resp.data.following)
              setRepo2(resp.data.public_repos)
              setFollower2(resp.data.followers)
              setname2(resp.data.name)
              seturl2(resp.data.avatar_url)
              // setCal2(follower1)
              // setCal2(cal1 + repo1)
              // setCal2(follower2 + repo2)  
          })

               
    
      } 

      const check = () => {
        console.log("I am In")
        if((repo2 + follower2) < (repo1 + follower1)){
            setWinner("Winner is Player 1")
          }
          else if((repo2 + follower2) < (repo1 + follower1)){
            setWinner("Draw")
          }
          else{
            setWinner("Winner is Player 2")
          }
      }

  const battleCheck =  () => {
    getProfile1()
     getProfile2()
     check()
  }

  if(data1 === false && data2 === false){
  return (
    <>
    <Block1>
      <IonCard >
        <Card>
        <form>
        <input 
         type="text"
         value={input1}
         onChange={event1 => setInput1(event1.target.value)}
         placeholder="GitHub username 1"
         required
         style={{width : "95%", height : "25px", border : "1px solid #707070", borderRadius: "9999px",outline: "none",
         fontSize: "16px", paddingLeft: "10px"}}
        />

      </form>
      
      </Card>
      </IonCard>

      
        <img src={battle} style={{height : "100px"}}/>
      

        <IonCard>
        <Card  >
        <form>
        <input 
        type="text"
        value={input2}
        onChange={event2 => setInput2(event2.target.value)}
        placeholder="GitHub username 2"
        required
        style={{width : "95%", height : "25px", border : "1px solid #707070", borderRadius: "9999px",outline: "none",
        fontSize: "16px", paddingLeft: "10px"}}
        />
        </form>
        </Card>  
        </IonCard>
   
        </Block1>
        <center>
          <button onClick={battleCheck} style={{color : "white",width : "100px", height : "50px", borderRadius : "10px", fontSize : "20px", fontFamily : "cursive", background: "linear-gradient(to right, #42275a, #734b6d)"}}>Battle</button>
          </center>
        </>
          );
  }
  else{
    return(
      <>
      <Block>
        <IonCard >
          <Card1>
          <form>
          <input 
           type="text"
           value={input1}
           onChange={event1 => setInput1(event1.target.value)}
           placeholder="GitHub username 1"
           required
           style={{width : "95%", height : "25px", border : "1px solid #707070", borderRadius: "9999px",outline: "none",
           fontSize: "16px", paddingLeft: "10px"}}
          />
          <center>
          <IonThumbnail style={{padding : "10px" , borderRadius : "50%"}}>
          <img src={url1} />
          </IonThumbnail>
          </center>
        
          <h3>Name {' : '}{' '} {name1}</h3>
          <h3>Repositeries {' : '}{' '} {repo1}</h3>
          <h3>Followers {' : '}{' '} {follower1}</h3>
          <h3>Following {' : '}{' '} {follow1}</h3>
          <h3>Score {' : '}{' '} {repo1+follower1}</h3>
  
        </form>
        
        </Card1>
        </IonCard>
  
        
          <img src={battle} style={{height : "100px"}}/>
        
  
          <IonCard>
          <Card1 >
          <form>
          <input 
          type="text"
          value={input2}
          onChange={event2 => setInput2(event2.target.value)}
          placeholder="GitHub username 2"
          required
          style={{width : "85%", height : "25px", border : "1px solid #707070", borderRadius: "9999px",outline: "none",
          fontSize: "16px", paddingLeft: "10px"}}
          />

        <center>
          <IonThumbnail style={{padding : "10px" , borderRadius : "50%"}}>
          <img src={url2} />
          </IonThumbnail>
          </center>
          {/* <Detail> */}
          <h3>Name {' : '}{' '} {name2}</h3>
          <h3>Repositeries {' : '}{' '} {repo2}</h3>
          <h3>Followers {' : '}{' '} {follower2}</h3>
          <h3>Following {' : '}{' '} {follow2}</h3>
          <h3>Score {' : '}{' '} {repo2+follower2}</h3>
          {/* </Detail> */}
          </form>
          </Card1>  
          </IonCard>   
          </Block>
          
          <center>
        <h3>{winner}</h3>
          <button onClick={battleCheck} style={{color : "white",width : "100px", height : "50px", borderRadius : "10px", fontSize : "20px", fontFamily : "cursive", background: "linear-gradient(to right, #42275a, #734b6d)"}}>Battle</button>
          {/* <button onClick={setData2(false) && setData1(false)} style={{color : "white",width : "100px", height : "50px", borderRadius : "10px", fontSize : "20px", fontFamily : "cursive", background: "linear-gradient(to right, #42275a, #734b6d)"}}>Reset</button> */}
          </center>
          </>
   
    );
  }
}

export default Battle;
