import styled from 'styled-components';

export default function Quotes() {
  return (
    <Content>
      <Container>
        <Row>
          <Col>
            <div>
              <p>
                Non aliquip aute consectetur veniam minim esse aute adipisicing exercitation. Sunt sit in qui est ut aute. Nisi sint irure proident et
                eiusmod quis in sit enim. Sint dolore elit occaecat sunt ex deserunt duis id et dolore aliqua cupidatat nisi irure. Deserunt veniam
                nostrud laboris labore eu est non proident commodo ut amet laboris aute commodo. Anim tempor eiusmod aliqua dolor irure dolore in sit
                nostrud nostrud nulla laborum. Mollit magna enim excepteur velit elit id enim adipisicing.
              </p>
              <p>
                Exercitation proident deserunt consectetur aliquip deserunt incididunt ullamco laboris eiusmod sint est nulla sit ea. Dolore
                consectetur quis irure do proident quis ex aliquip exercitation. Dolore occaecat minim fugiat pariatur esse occaecat veniam.
                Adipisicing irure ipsum laboris sint est ullamco anim ad amet. Incididunt mollit Lorem voluptate mollit irure quis culpa dolor
                pariatur. Duis officia dolore tempor aute do tempor nulla minim magna.
              </p>
              <p>
                Ullamco amet excepteur voluptate voluptate ipsum ipsum voluptate. Minim eiusmod eu exercitation ullamco enim sint pariatur voluptate
                laboris. Sit non nisi sit quis quis laborum laborum velit exercitation id dolore proident ipsum.
              </p>
              <p>
                Cupidatat aliquip officia non deserunt est veniam anim aute cupidatat tempor adipisicing irure officia. Non cillum cupidatat dolor
                sunt do ipsum. Ad anim irure cupidatat ut ipsum adipisicing aliqua non quis tempor ut excepteur. Enim et duis esse consectetur enim
                tempor irure et dolore Lorem consectetur. Non cillum veniam duis est eiusmod laborum nulla. Consectetur pariatur cupidatat quis
                proident mollit non sunt labore laboris sint laborum.
              </p>
              <p>
                Ut reprehenderit incididunt id amet fugiat nisi exercitation cupidatat sunt dolore deserunt. Elit voluptate occaecat eiusmod dolor
                quis aliqua sunt ullamco adipisicing. Eiusmod fugiat sint irure tempor enim elit officia. Laborum ex velit id voluptate aliquip veniam
                excepteur nulla eu id pariatur. Nulla deserunt incididunt commodo aliquip est minim quis ut. Anim cillum commodo esse laboris tempor
                adipisicing laborum enim ea laboris ex. Ad eu dolor cillum Lorem occaecat consequat nisi qui.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Content>
  );
}

const Content = styled.div`
  padding: 0 0 5em;

  p {
    font-size: 20px;
    /* color: #394956; */
    line-height: 150%;
    margin: 0;
  }

  p + p {
    margin-top: 2em;
  }

  @media (min-width: 992px) {
    padding: 5.5em 0 6.5em;

    p {
      font-size: 20px;
      line-height: 150%;
    }
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding-left: 15px;
  padding-right: 15px;
`;

const Row = styled.div`
  box-sizing: border-box;
  margin-left: -15px;
  margin-right: -15px;

  &::after {
    clear: both;
    content: '';
    display: table;
  }
`;

const Col = styled.div`
  float: left;
  box-sizing: border-box;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  width: 66.66667%;
  margin-left: 16.66667%;
`;
