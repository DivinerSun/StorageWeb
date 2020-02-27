import React from 'react'
import { Card, Button, Divider, Icon } from 'antd'

import './index.less'


const Buttons = () => {

    return (
        <div className={'buttons'}>
            <div className={'cardContainer'}>
                <Card
                    title={'基础按钮'}
                >
                    <Button>正常按钮</Button>
                    <Button type={'primary'}>主要按钮</Button>
                    <Button type={'dashed'}>虚线按钮</Button>
                    <Button type={'danger'}>危险按钮</Button>
                    <Button type={'link'}>链接按钮</Button>
                </Card>
            </div>
            <div className={'cardContainer'}>
                <Card
                    title={'图标按钮'}
                >
                    <Button shape={'circle'}>搜索一下</Button>
                    <Button shape={'circle-outline'}>搜索一下</Button>
                    <Button shape={'round'}>搜索一下</Button>
                    <Divider />
                    <Button shape={'circle'}/>
                    <Button icon={'search'}/>
                    <Button shape={'circle'} icon={'search'}/>
                    <Button icon={'search'}>搜索一下</Button>
                    <Button shape={'circle'} icon={'search'}>搜索一下</Button>
                </Card>
            </div>
            <div className={'cardContainer'}>
                <Card
                    title={'按钮尺寸'}
                >
                    <Button size={'small'}>正常按钮</Button>
                    <Button size={'small'} type={'primary'}>主要按钮</Button>
                    <Button size={'small'} type={'dashed'}>虚线按钮</Button>
                    <Button size={'small'} type={'danger'}>危险按钮</Button>
                    <Button size={'small'} type={'link'}>链接按钮</Button>
                    <Divider />
                    <Button>正常按钮</Button>
                    <Button type={'primary'}>主要按钮</Button>
                    <Button type={'dashed'}>虚线按钮</Button>
                    <Button type={'danger'}>危险按钮</Button>
                    <Button type={'link'}>链接按钮</Button>
                    <Divider />
                    <Button size={'large'}>正常按钮</Button>
                    <Button size={'large'} type={'primary'}>主要按钮</Button>
                    <Button size={'large'} type={'dashed'}>虚线按钮</Button>
                    <Button size={'large'} type={'danger'}>危险按钮</Button>
                    <Button size={'large'} type={'link'}>链接按钮</Button>
                </Card>
            </div>
            <div className={'cardContainer'}>
                <Card
                    title={'按钮组'}
                >
                    <Button.Group>
                        <Button className={'defaultButton'} type={'primary'}>
                            <Icon type={'left'}/>
                            上一页
                        </Button>
                        <Button type={'primary'}>
                            上一页
                            <Icon type={'right'}/>
                        </Button>
                    </Button.Group>
                    <Button.Group>
                        <Button className={'defaultButton'} type={'primary'} icon={'download'}/>
                        <Button type={'primary'} icon={'upload'}/>
                    </Button.Group>
                    <Button.Group>
                        <Button className={'defaultButton'} type={'primary'} icon={'cloud'}/>
                        <Button type={'primary'} icon={'cloud-download'}/>
                    </Button.Group>
                </Card>
            </div>
            <div className={'cardContainer'}>
                <Card
                    title={'按钮状态'}
                >
                    <Button type={'primary'} onClick={() => {console.warn('可用状态')}}>可用状态</Button>
                    <Button type={'primary'} disabled={true} onClick={() => {console.warn('不可用状态')}}>不可用状态</Button>
                    <Divider/>
                    <Button type={'primary'} onClick={() => {console.warn('非加载状态')}}>非加载状态</Button>
                    <Button type={'primary'} loading={true} onClick={() => {console.warn('加载中状态')}}>加载中状态</Button>
                </Card>
            </div>
            <div className={'cardContainer'}>
                <Card
                    title={'block按钮'}
                >
                    <Button style={{marginBottom: '20px'}} block={true}>正常按钮</Button>
                    <Button style={{marginBottom: '20px'}} block={true} type={'primary'}>主要按钮</Button>
                    <Button style={{marginBottom: '20px'}} block={true} type={'dashed'}>虚线按钮</Button>
                    <Button style={{marginBottom: '20px'}} block={true} type={'danger'}>危险按钮</Button>
                    <Button style={{marginBottom: '20px'}} block={true} type={'link'}>链接按钮</Button>
                </Card>
            </div>
            <div className={'cardContainer'}>
                <Card
                    title={'跳转按钮'}
                >
                    <Button type={'primary'} href={'/admin'}>回主页</Button>
                </Card>
            </div>
        </div>
    )
}

export default Buttons;