import styled from 'styled-components';

import { fetchQuotes } from '../utils/utils';

export default function InputBar({ buttonRef, count, setCount, setQuotes }) {
  const handleChange = (e) => setCount(e.target.value);
  return (
    <DivTrain1>
      <DivTrain2>
        <DivTrain3>
          <DivTrain4>
            <DivTrain5>
              {/* LEFT - TEXT & INPUT */}
              <TextContainer>
                <TextWrapper>
                  {/* LEFT TEXT */}
                  <TextItem>
                    <span>Gimme like</span>
                  </TextItem>
                  {/* INPUT */}
                  <TextItem>
                    <input name='numberOfParagraphs' value={count} type='number' max='15' min='2' onChange={handleChange} />
                  </TextItem>
                  {/* RIGHT TEXT */}
                  <TextItem>
                    <span>quotes of that Kanye West.</span>
                  </TextItem>
                </TextWrapper>
              </TextContainer>

              {/* RIGHT - BUTTON */}
              <Button ref={buttonRef} onClick={() => fetchQuotes(setQuotes, count)}>Receive the West.</Button>
            </DivTrain5>
          </DivTrain4>
        </DivTrain3>
      </DivTrain2>
    </DivTrain1>
  );
}

const DivTrain1 = styled.div`
  position: relative;
  z-index: 20;
  top: -40px;
`;

const DivTrain2 = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding-left: 15px;
  padding-right: 15px;
`;

const DivTrain3 = styled.div`
  box-sizing: border-box;
  margin-left: -15px;
  margin-right: -15px;

  &::after {
    clear: both;
    content: '';
    display: table;
  }

  & > [class*='o-col'] {
    float: left;
  }
`;

const DivTrain4 = styled.div`
  box-sizing: border-box;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  width: 100%;

  @media (min-width: 992px) {
    margin-left: 33.33333%;
    width: 66.66667%;
  }
`;

const DivTrain5 = styled.div`
  box-shadow: 0 23px 50px -13px rgba(0, 0, 0, 0.3);
  align-items: flex-start;

  @media (min-width: 992px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

const TextContainer = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.background2};
  padding: 12px 30px;
  color: ${({ theme }) => theme.font};
  font-size: 20px;
  letter-spacing: -0.5px;
  box-sizing: border-box;
  max-width: 100%;
  min-width: 0;
  flex: 1;

  @media (min-width: 992px) {
    height: 76px;
  }
`;

const TextWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  list-style: none;
  margin-bottom: -4px;
  margin-left: 0;
  padding-left: 0;

  &::after {
    box-sizing: border-box;
    content: ' ';
    clear: both;
    display: table;
  }

  &:last-child {
    margin-bottom: -4px;
  }
`;

const TextItem = styled.div`
  box-sizing: border-box;
  display: inline-block;
  margin: 0 0 4px;
  margin-right: 4px;
  padding: 0;
  vertical-align: middle;

  span {
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    height: 52px;
    line-height: 52px;
  }

  input {
    appearance: none;
    color: ${({ theme }) => theme.font};
    background-color: ${({ theme }) => theme.background2};
    border-color: ${({ theme }) => theme.input};
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    display: inline-block;
    font-family: inherit;
    font-size: 100%;
    width: 55px;
    height: 52px;
    line-height: 50px;
    margin: 0;
    outline: none;
    padding: 0 8px;
    position: relative;
    vertical-align: middle;

    &::placeholder {
      color: ${({ theme }) => theme.input};
    }

    &:focus {
      border-color: ${({ theme }) => theme.font};
      outline: none;
    }

    &[disabled] {
      background-color: ${({ theme }) => theme.background};
      border-color: ${({ theme }) => theme.background2};
      cursor: not-allowed;

      &:hover,
      &:active,
      &:focus {
        cursor: not-allowed;
      }
    }
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  background: #0551b4;
  color: #dde6ed;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.5px;
  border: 0;
  height: 76px;
  padding: 0 2em;
  transition: background 0.3s ease-in-out;

  &:hover {
    filter: saturate(1.5);
  }

  @media (min-width: 992px) {
    width: auto;
  }
`;

