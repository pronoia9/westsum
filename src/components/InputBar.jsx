import styled from 'styled-components';

export default function InputBar({ buttonRef }) {
  return (
    <CForm>
      <OContainer>
        <ORow>
          <OCol>
            <Form>
              <OFlexy>
                {/* LEFT - TEXT & INPUT */}
                <OFlexyBlock>
                  <OInline>
                    {/* LEFT TEXT */}
                    <OInlineItem>
                      <span>Gimme like</span>
                    </OInlineItem>
                    {/* INPUT */}
                    <OInlineItem>
                      <input name='numberOfParagraphs' placeholder='5' type='number' max='99' min='2' />
                    </OInlineItem>
                    {/* RIGHT TEXT */}
                    <OInlineItem>
                      <span>quotes of that Kanye West.</span>
                    </OInlineItem>
                  </OInline>
                </OFlexyBlock>

                {/* RIGHT - BUTTON */}
                <Button ref={buttonRef}>Receive the West.</Button>
              </OFlexy>
            </Form>
          </OCol>
        </ORow>
      </OContainer>
    </CForm>
  );
}

const CForm = styled.div`
  position: relative;
  z-index: 20;
  top: -40px;
`;

const OContainer = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding-left: 15px;
  padding-right: 15px;
`;

const ORow = styled.div`
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

const OCol = styled.div`
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

const Form = styled.form``;

const OFlexy = styled.div`
  box-shadow: 0 23px 50px -13px rgba(0, 0, 0, 0.3);
  align-items: flex-start;

  @media (min-width: 992px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

const OFlexyBlock = styled.div`
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

const OInline = styled.div`
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

const OInlineItem = styled.div`
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
    border-color: ${({ theme }) => theme.font2};
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
      color: ${({ theme }) => theme.font2};
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
  color: #DDE6ED;
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
