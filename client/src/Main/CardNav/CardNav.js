
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardImgOverlay} from 'reactstrap';
import Galaxy from './galaxy.jpg';

import './CardNav.css';
import { Container, Row, Col } from 'reactstrap';

import {
  withRouter, Link
} from 'react-router-dom';


const CardNav = ({route, OnRouteChange}) => {
  return (
	<Row className='center cont zeroMargins'>
    <Col className='new' xs='12' sm='6' md='4'>
      <div className = 'CardStyles'>
      <Card className='dimensionSet' onClick={() => OnRouteChange('/OBS')} >
        <CardImg className='borderSquare' src="https://obsproject.com/assets/images/features/FeatureDocksB.jpg" />
         <CardBody>
          <CardTitle>How to use OBS</CardTitle>
          <CardSubtitle className="block-with-text">Free and open source software for video recording and live streaming</CardSubtitle>
        </CardBody>
      </Card>
      </div>
    </Col>
    <Col className='new' xs='12' sm='6' md='4'>
      <div className = 'CardStyles'>
      <Card className='dimensionSet' onClick={() => OnRouteChange('/Equip')} >
        <CardImg className='borderSquare' src="https://i.redditmedia.com/XKGfX4nHdy6CNQHwtL0P3VP9jDJ8ut9nDzHAAej2yuo.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=640&s=58a5add3d683bb7454be0cee42341650"/>
        <CardBody>
          <CardTitle>Equipment</CardTitle>
          <CardSubtitle className="block-with-text">What's the best streaming equiptment at your price point?</CardSubtitle>
        </CardBody>
      </Card>
      </div>
    </Col>  
    <Col className='new' xs='12' sm='6' md='4'>
      <div className = 'CardStyles'>
      <Card className='dimensionSet' onClick={() => OnRouteChange('/Alerts')} >
        <CardImg className='borderSquare' src="https://pre00.deviantart.net/1a05/th/pre/f/2017/081/8/d/_free__platinum___twitch_alerts_by_lol0verlay-db35rer.jpg" />
        <CardBody>
          <CardTitle>Alerts</CardTitle>
          <CardSubtitle className="block-with-text">Configuring twitch alerts for going live, gaining subs, and more.</CardSubtitle>
        </CardBody>
      </Card>
      </div>
    </Col>
    <Col className='new' xs='12' sm='6' md='4'>
      <div className = 'CardStyles'>
      <Card className='dimensionSet' onClick={() => OnRouteChange('/Designs')} >
        <CardImg className='borderSquare' src="data:image/png;base64,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" alt="Card image cap" />
        <CardBody>
          <CardTitle>Branding</CardTitle>
          <CardSubtitle className="block-with-text">What's your style? Designing the assets required to attract viewers.</CardSubtitle>
        </CardBody>
      </Card>
      </div>
    </Col>  
    <Col className='new' xs='12' sm='6' md='4'>
      <div className = 'CardStyles'>
      <Card className='dimensionSet' onClick={() => OnRouteChange('/Streamer')} >
        <CardImg className='borderSquare' src="data:image/png;base64,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" alt="Card image cap" />
        <CardBody>
          <CardTitle>Streamer Society</CardTitle>
          <CardSubtitle className="block-with-text">Join the Streamer Society to be considered for streamer of the day or find collaborators</CardSubtitle>
        </CardBody>
      </Card>
      </div>
    </Col>
    <Col className='new' xs='12' sm='6' md='4'>
      <div className = 'CardStyles'>
      <Card className='dimensionSet' onClick={() => OnRouteChange('/Tips')} >
        <CardImg className='borderSquare' src="data:image/png;base64,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" alt="Card image cap" />
        <CardBody>
          <CardTitle>Tips and Tricks</CardTitle>
          <CardSubtitle className="block-with-text">Getting viewers and other topics. Have tips to share? Become part of our community!</CardSubtitle>
        </CardBody>
      </Card>
      </div>
    </Col>  
  </Row>
  );
};

export default withRouter(CardNav);