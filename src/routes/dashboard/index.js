import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import { Page } from 'components'
import { NumberCard, Sales, Completed } from './components'


function Dashboard ({ dashboard, loading }) {
  const { sales, numbers, completed } = dashboard
  const numberCards = numbers.map((item, key) => (<Col key={key} lg={6} md={12}>
    <NumberCard {...item} />
  </Col>))

  return (
    <Page loading={loading.models.dashboard && sales.length === 0}>
      <Row gutter={24}>
        {numberCards}
        <Col lg={18} md={24}>
          <Card bordered={false}
            bodyStyle={{
              padding: '24px 36px 24px 0',
            }}
          >
            <Sales data={sales} />
          </Card>
        </Col>
        <Col lg={24} md={24}>
          <Card bordered={false}
            bodyStyle={{
              padding: '24px 36px 24px 0',
            }}
          >
            <Completed data={completed} />
          </Card>
        </Col>
      </Row>
    </Page>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({ dashboard, loading }) => ({ dashboard, loading }))(Dashboard)
