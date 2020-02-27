import React from 'react'
import { Card, Icon, Divider } from 'antd'

function Icons() {

    return (
        <div>
            <div className={'cardContainer'}>
                <Card
                    title={'基础图标'}
                >
                    <Icon style={{marginRight: 20}} type={'user'}/>
                    <Icon style={{marginRight: 20}} type={'home'}/>
                    <Icon style={{marginRight: 20}} type={'setting'}/>
                    <Icon style={{marginRight: 20}} type={'wifi'}/>
                    <Icon style={{marginRight: 20}} type={'global'}/>
                    <Divider />
                    <Icon style={{fontSize: 20, marginRight: 20}} type={'user'}/>
                    <Icon style={{fontSize: 20, marginRight: 20}} type={'home'}/>
                    <Icon style={{fontSize: 20, marginRight: 20}} type={'setting'}/>
                    <Icon style={{fontSize: 20, marginRight: 20}} type={'wifi'}/>
                    <Icon style={{fontSize: 20, marginRight: 20}} type={'global'}/>
                    <Divider />
                    <Icon style={{fontSize: 50, color: 'red', marginRight: 20}} type={'user'}/>
                    <Icon style={{fontSize: 50, color: 'green', marginRight: 20}} type={'home'}/>
                    <Icon style={{fontSize: 50, color: 'pink', marginRight: 20}} type={'setting'}/>
                    <Icon style={{fontSize: 50, color: 'blue', marginRight: 20}} type={'wifi'}/>
                    <Icon style={{fontSize: 50, color: '#98decf', marginRight: 20}} type={'global'}/>
                </Card>
            </div>
            <div className={'cardContainer'}>
                <Card
                    title={'图标主题'}
                >
                    <Icon style={{marginRight: 20}} type={'setting'}/>
                    <Icon theme={'filled'} style={{marginRight: 20}} type={'setting'}/>
                    <Icon theme={'twoTone'} style={{marginRight: 20}} type={'setting'}/>
                </Card>
            </div>
            <div className={'cardContainer'}>
                <Card
                    title={'图标旋转'}
                >
                    <Icon rotate={0} style={{fontSize: 50, marginRight: 20}} type={'wifi'}/>
                    <Icon rotate={30} style={{fontSize: 50, marginRight: 20}} type={'wifi'}/>
                    <Icon rotate={90} style={{fontSize: 50, marginRight: 20}} type={'wifi'}/>
                    <Icon rotate={180} style={{fontSize: 50, marginRight: 20}} type={'wifi'}/>
                    <Icon rotate={270} style={{fontSize: 50, marginRight: 20}} type={'wifi'}/>
                    <Icon rotate={360} style={{fontSize: 50, marginRight: 20}} type={'wifi'}/>
                    <Divider />
                    <Icon spin={true} style={{fontSize: 50, marginRight: 20}} type={'user'}/>
                    <Icon spin={true} style={{fontSize: 50, marginRight: 20}} type={'home'}/>
                    <Icon spin={true} style={{fontSize: 50, marginRight: 20}} type={'setting'}/>
                    <Icon spin={true} style={{fontSize: 50, marginRight: 20}} type={'wifi'}/>
                    <Icon spin={true} style={{fontSize: 50, marginRight: 20}} type={'global'}/>
                </Card>
            </div>
        </div>
    );
}

export default Icons