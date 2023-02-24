// Style your components here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding-top: 32px;
  padding-right: 24px;
  padding-bottom: 32px;
  padding-left: 24px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`
export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const MainContainer = styled.div`
  background-image: url(${props => props.bgImage});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40vh;

  width: 90%;
  margin-bottom: 15px;
  padding-bottom: 0px;
  padding-left: 10px;
  background-size: cover;
  padding-top: 5px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const LabelInput = styled.label`
  color: #7e858e;
  font-family: Roboto;
  font-size: 15px;
`

export const Input = styled.input`
  color: #35469c;
  width: 400px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #5a7184;
  height: 35px;
  padding: 10px;
  font-family: Roboto;
  font-size: 14px;

  @media screen and (max-width: 767px) {
    width: 280px;
  }
`
export const SelectOption = styled.select`
  margin-top: 5px;
  width: 400px;
  height: 35px;
  border: 1px solid #5a7184;
  border-radius: 5px;
  padding: 5px;
  @media screen and (max-width: 767px) {
    width: 280px;
  }
`

export const OptionText = styled.option`
  color: #7e858e;
  font-family: Roboto;
  font-size: 15px;
`

export const CustomButton = styled.button`
  background-color: #0b69ff;
  margin-top: 20px;
  border: none;
  padding: 10px;
  height: 40px;
  cursor: pointer;
  width: 120px;
  border-radius: 8px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 15px;
`

export const TopHeading = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-weight: 700;
  font-family: Roboto;
  text-align: center;
`
