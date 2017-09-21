import React from 'react'
import ReactPlayer from 'react-player'

export default class NewRelicReactPlayer extends React.Component {

  static propTypes = {
    onStart:  ReactPlayer.propTypes.onStart,
    onPlay:  ReactPlayer.propTypes.onPlay,
    onDuration:  ReactPlayer.propTypes.onDuration,
    onPause:  ReactPlayer.propTypes.onPause,
    onBuffer:  ReactPlayer.propTypes.onBuffer,
    onSeek:  ReactPlayer.propTypes.onSeek,
    onEnded:  ReactPlayer.propTypes.onEnded,
    onError:  ReactPlayer.propTypes.onError
  }

  componentDidMount () {
    this.tracker = new nrvideo.ReactPlayerTracker(this.player)
    nrvideo.Core.addTracker(this.tracker)
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.url !== this.props.url) { 
      // Url changed
      this.tracker.onUrlChanged()
    }
  }

  ref = (player) => {
    this.player = player
  }

  onStart = (e) => { 
    if (this.props.onStart) this.props.onStart()
    this.tracker.onStart(e) 
  }

  onPlay = (e) => { 
    if (this.props.onPlay) this.props.onPlay()
    this.tracker.onPlay(e) 
  }

  onDuration = (e) => { 
    if (this.props.onDuration) this.props.onDuration()
    this.tracker.onDuration(e) 
  }

  onPause = (e) => { 
    if (this.props.onPause) this.props.onPause()
    this.tracker.onPause(e) 
  }

  onBuffer = (e) => { 
    if (this.props.onBuffer) this.props.onBuffer()
    this.tracker.onBuffer(e)
  }

  onSeek = (e) => { 
    if (this.props.onSeek) this.props.onSeek()
    this.tracker.onSeek(e) 
  }

  onEnded = (e) => { 
    if (this.props.onEnded) this.props.onEnded()
    this.tracker.onEnded(e) 
  }

  onError = (e) => { 
    if (this.props.onError) this.props.onError()
    this.tracker.onError(e) 
  }

  render() {
    return (
      <ReactPlayer 
        {...this.props}
        ref={this.ref}
        onStart={this.onStart}
        onPlay={this.onPlay}
        onDuration={this.onDuration}
        onPause={this.onPause}
        onBuffer={this.onBuffer}
        onSeek={this.onSeek}
        onEnded={this.onEnded}
        onError={this.onError}
      />
    )
  }
}
