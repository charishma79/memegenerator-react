import {Component} from 'react'

import {
  MemeGeneratorContainer,
  MainContainer,
  FormContainer,
  Heading,
  TextInputContainer,
  LabelInput,
  Input,
  SelectOption,
  OptionText,
  CustomButton,
  TopHeading,
  BgContainer,
  FormAndMemeContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    activeOptionId: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    bgImageUrl: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSize: '',
  }

  onChangeOption = event => {
    this.setState({activeOptionId: event.target.value})
  }

  onEnterImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onEnterTop = event => {
    this.setState({topText: event.target.value})
  }

  onEnterBottom = event => {
    this.setState({bottomText: event.target.value})
  }

  onGenerateForm = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, activeOptionId} = this.state

    this.setState({
      bgImageUrl: imageUrl,
      topTextInput: topText,
      bottomTextInput: bottomText,
      activeFontSize: activeOptionId,
    })
  }

  generateMemeContainer = () => {
    const {
      topTextInput,
      bottomTextInput,
      activeFontSize,
      bgImageUrl,
    } = this.state
    return (
      <MainContainer data-testid="meme" bgImage={bgImageUrl}>
        <TopHeading fontSize={activeFontSize}>{topTextInput}</TopHeading>
        <TopHeading fontSize={activeFontSize}>{bottomTextInput}</TopHeading>
      </MainContainer>
    )
  }

  render() {
    const {activeOptionId, imageUrl, topText, bottomText} = this.state
    console.log(activeOptionId)

    return (
      <BgContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.generateMemeContainer()}
            <FormContainer onSubmit={this.onGenerateForm}>
              <TextInputContainer>
                <LabelInput htmlFor="bgImageUrl">Image URL</LabelInput>
                <Input
                  id="bgImageUrl"
                  type="text"
                  placeholder="Enter the Image URL"
                  onChange={this.onEnterImageUrl}
                  value={imageUrl}
                />
              </TextInputContainer>
              <TextInputContainer>
                <LabelInput htmlFor="topTextInput">Top Text</LabelInput>
                <Input
                  id="topTextInput"
                  type="text"
                  value={topText}
                  placeholder="Enter the Top Text"
                  onChange={this.onEnterTop}
                />
              </TextInputContainer>
              <TextInputContainer>
                <LabelInput htmlFor="bottomTextInput">Bottom Text</LabelInput>
                <Input
                  id="bottomTextInput"
                  type="text"
                  placeholder="Enter the Bottom Text"
                  value={bottomText}
                  onChange={this.onEnterBottom}
                />
              </TextInputContainer>
              <LabelInput htmlFor="font-size-options">Font Size</LabelInput>
              <SelectOption
                value={activeOptionId}
                id="font-size-options"
                onChange={this.onChangeOption}
              >
                {fontSizesOptionsList.map(eachOption => (
                  <OptionText
                    key={eachOption.optionId}
                    value={eachOption.optionId}
                  >
                    {eachOption.displayText}
                  </OptionText>
                ))}
              </SelectOption>
              <CustomButton type="submit">Generate</CustomButton>
            </FormContainer>
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </BgContainer>
    )
  }
}

export default MemeGenerator
