import React, { useEffect, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'

import Header from './components/Header'
// import Aside from './components/Aside'
// import Main from './components/Main'
// import FooterPlayer from './components/FooterPlayer'
import { useGetter, useDispatch } from '@/store'
import PagerView from 'react-native-pager-view'
import Pic from './Pic'

export default (props) => {
  const theme = useGetter('common', 'theme')
  const setComponentId = useDispatch('common', 'setComponentId')
  useEffect(() => {
    setComponentId({ name: 'playDetail', id: props.componentId })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onPageScrollStateChanged = useCallback(({ nativeEvent }) => {
    // console.log(nativeEvent)
    if (nativeEvent.pageScrollState != 'idle') return
    console.log(nativeEvent.pageScrollState)
  }, [])

  return (
    <>
      <Header componentId={props.componentId} />
      <View style={{ flex: 1, flexDirection: 'column', height: '100%', backgroundColor: theme.primary }}>
        <PagerView
          // onPageSelected={onPageSelected}
          onPageScrollStateChanged={onPageScrollStateChanged}
          style={styles.pagerView}
        >
          <View collapsable={false} key="1" style={styles.pageStyle}>
            <Pic />
          </View>
        </PagerView>
        <View style={styles.player}>

        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#fff',
  },
  pagerView: {
    flex: 1,
  },
  player: {
    flex: 0,
  },
})
