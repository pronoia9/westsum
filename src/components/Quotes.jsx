// The MIT License (MIT)

// Copyright (c) 2023 neil kalman (https://codepen.io/thatkookooguy/pen/VPJpaW)

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import styled, { css } from 'styled-components';

export default function Quotes() {
  return (
    <DivTrain1>
      <DivTrain2>
        <DivTrain3>
          <DivTrain4>
            {/* <p image={`/src/assets/kanyemoji-8.png`} class='right'>
              Are we dogs??? 🐶
            </p>
            <p image={`/src/assets/kanyemoji-8.png`} class='left'>
              no... we're human
            </p> */}
          </DivTrain4>
        </DivTrain3>
      </DivTrain2>
    </DivTrain1>
  );
}

const DivTrain1 = styled.div`
  padding: 0 0 5em;

  @media (min-width: 992px) {
    padding: 5.5em 0 6.5em;
  }
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
`;

const DivTrain4 = styled.div`
  float: left;
  box-sizing: border-box;
  min-height: 1px;
  padding: 0 15px;
  margin: 0;
  width: 100%;

  @media (min-width: 992px) {
    width: 66.66667%;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    margin-left: 16.66667%;
  }

  p {
    position: relative;
    clear: both;
    display: inline-block;
    max-width: 81%;
    padding: 14px;
    margin: 0 0 20px 0;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.chatBubble};
    /* font: 12px/16px 'Noto Sans', sans-serif; */
    color: ${({ theme }) => theme.chatFont};
    font-size: 20px;
    line-height: 150%;
    word-wrap: break-word;

    &:before {
      position: absolute;
      top: 0;
      width: 25px;
      height: 25px;
      border-radius: 25px;
      content: '';
      background-size: cover;
    }

    &:after {
      position: absolute;
      top: 10px;
      content: '';
      width: 0;
      height: 0;
      border-top: 10px solid ${({ theme }) => theme.chatBubble};
    }

    &.right {
      animation: show-chat-odd 0.15s 1 ease-in;
      float: right;
      margin-right: 45px;

      &:before {
        right: -45px;
        background-image: url(/src/assets/kanyemoji-8.png);
      }

      &:after {
        border-right: 10px solid transparent;
        right: -10px;
      }
    }

    &.left {
      animation: show-chat-even 0.15s 1 ease-in;
      float: left;
      margin-left: 45px;

      &:before {
        left: -45px;
        background-image: url(/src/assets/kanyemoji-8.png);
      }

      &:after {
        border-left: 10px solid transparent;
        left: -10px;
      }
    }
  }

  @media (min-width: 992px) {
    p {
      font-size: 20px;
      line-height: 150%;
    }
  }
`;
