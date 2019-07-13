/* eslint-disable react/prop-types */
import React from 'react'
import StickyHeader from '../components/StickyHeader'
import '../styles/global.scss'

export default class extends React.Component {
  render () {
    const { Component } = this.props

    return (
      <>
        <StickyHeader />
        <Component />
      </>
    )
  }
}