import * as nrvideo from 'newrelic-video-core'
import {version} from '../package.json'

export default class ReactPlayerTracker extends nrvideo.Tracker {
  getTrackerName () {
    return 'react-player'
  }

  getTrackerVersion () {
    return version
  }

  getPlayhead () {
    return this.player.getCurrentTime()
  }

  getDuration () {
    return this.player.getDuration()
  }

  getSrc () {
    return this.player.url
  }

  isMuted () {
    return this.player.muted
  }

  getPlayrate () {
    return this.player.playbackRate
  }

  onUrlChanged () {
    nrvideo.Log.debug('onUrlChanged')
    this.sendEnd()
    this.sendRequest()
  }

  onStart (e) {
    nrvideo.Log.debug('onStart')
    this.sendRequest()
    this.sendStart()
  }

  onPlay (e) {
    nrvideo.Log.debug('onPlay')
    this.sendResume()
    this.sendSeekEnd()
    this.sendBufferEnd()
  }

  onDuration (e) {
    nrvideo.Log.debug('onDuration', e)
  }

  onPause (e) {
    nrvideo.Log.debug('onPause')
    this.sendPause()
  }

  onBuffer (e) {
    nrvideo.Log.debug('onBuffer')
    if (!this.state.isSeeking) {
      this.sendRequest()
      this.sendBufferStart()
    }
  }

  onSeek (e) {
    nrvideo.Log.debug('onSeek', e)
    this.sendSeekStart()
  }

  onEnded (e) {
    nrvideo.Log.debug('onEnded')
    this.sendEnd()
  }
  onError (e) {
    nrvideo.Log.debug('onError', e)
    this.sendError()
  }
}
