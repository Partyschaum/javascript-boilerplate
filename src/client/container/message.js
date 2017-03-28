// @flow

import { connect } from 'react-redux'

import Message from '../component/message'

const maptStateToProps = state => ({
  message: state.hello.get('message'),
})

export default connect(maptStateToProps)(Message)
