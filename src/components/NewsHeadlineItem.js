import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';
import { Paper, Typography } from '@material-ui/core';

import { GridRootWithMarginBottom, FullImage, DarkOverlay } from '../styles/CommonStyledComponent';
import NewsHeadlineItemMobile from './NewsHeadlineItemMobile';

const RootPaper = styled(Paper)`
  && {
    margin: 3px;
    padding: 10px;
    box-shadow: none;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ReadMoreBtn = styled(Link)`
  && {
    position: absolute;
    bottom: 50px;
    left: 50px;

    display: block;
    border: 1px white solid;
    padding: 8px 30px;

    color: white;
    text-decoration: none;
    transition: background .2s ease-out;

    ${({ hover }) => hover && `
      color: black;
      background-color: white;
    `}
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  left: 50px;
  top: 50px;
  right: 50px;
`;

const Title = styled(Typography)`
  && {
    font-weight: normal;
    margin-bottom: 24px;
  }
`;

const TitleLink = styled(Link)`
  && {
    text-decoration: none;
    color: white;
  }
`;

const Content = styled(Typography)`
  && {
    color: white;
  }
`;

const DateTitle = styled(Typography)`
  && {
    margin-top: 11px;
    font-size: 1rem;
    color: white;
  }
`;

class NewsHeadlineItem extends Component {
  state = {
    hover: false,
  }

  // 제목에 hover 시에도 버튼이 활성화되어야 함
  handleHover = () => this.setState(({ hover }) => ({ hover: !hover }));

  render() {
    const { width } = this.props;
    const { hover } = this.state;

    // 예시 데이터
    const news = {
      id: '1',
      category: '경기소식',
      img: 'https://www.creativeboom.com/uploads/articles/2b/2be47fa48493c19a47bb27edee9d03e4c0335b04_630.jpg',
      title: 'North Korea\'s secretive capital',
      content: 'Raphael Olivier\'s photographs unveil the unique architecture of Pyongyang.', // Headline의 경우 content가 필요
      date: '20.05.2018'
    };

    if (width === 'xs')
      return <NewsHeadlineItemMobile news={news} />;

    return (
      <GridRootWithMarginBottom item xs={12} lg={7}>
        <RootPaper>
          <ImageContainer>
            <Link to={`/news/${news.id}`}>
              <FullImage src={news.img} alt='배경이미지' />
              <DarkOverlay
                onMouseOver={this.handleHover}
                onMouseLeave={this.handleHover}>
              </DarkOverlay>
            </Link>
            <ContentContainer>
              <Title variant="display3">
                <TitleLink to={`/news/${news.id}`}>{news.title}</TitleLink>
              </Title>
              <Content variant="headline">{news.content}</Content>
              <DateTitle variant="caption">{news.date}</DateTitle>
            </ContentContainer>
            <ReadMoreBtn hover={hover ? 'true' : undefined} to={`/news/${news.id}`}>Read More</ReadMoreBtn>
          </ImageContainer>
        </RootPaper>
      </GridRootWithMarginBottom >
    );
  }
}

export default withWidth()(withRouter(NewsHeadlineItem));