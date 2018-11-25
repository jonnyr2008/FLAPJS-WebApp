/**
 * Used by InputAdapter to handle input event logic.
 */
class AbstractInputController
{
  /**
   * Called by InputAdapter before an InputEvent begins.
   * Returns true if the event should be consumed. If consumed, the event will
   * not begin.
   */
  onPreInputEvent(pointer) { return false; }

  /**
   * Called by InputAdapter when an InputEvent resolves and is not an Alt input.
   * To handle events for Alt inputs, refer to onAltInputEvent().
   * Returns true if the event should be consumed. If consumed, the event will
   * not propagate to other trigger other events.
   */
  onInputEvent(pointer) { return false; }

  /**
   * Called by InputAdapter when an InputEvent resolves and is an Alt input.
   * To handle events for non-Alt inputs, refer to onInputEvent().
   * Returns true if the event should be consumed. If consumed, the event will
   * not propagate to other trigger other events.
   */
  onAltInputEvent(pointer) { return false; }

  /**
   * Called by InputAdapter when a DblInputEvent resolves. The input is
   * assumed by a non-Alt input, since only non-Alt inputs can trigger this
   * event.
   * Returns true if the event should be consumed. If consumed, the event will
   * not propagate to other trigger other events.
   */
  onDblInputEvent(pointer) { return false; }

  /**
   * Called by InputAdapter before a drag begins. The input could be either
   * an Alt or non-Alt input.
   * Returns true if the event should be consumed. If consumed, the event will
   * not propagate to other trigger other events, nor continue the drag input.
   */
  onDragStart(pointer) { return false; }

  /**
   * Called by InputAdapter while dragging moves. The input could be either
   * an Alt or non-Alt input.
   * Will always be called after onDragStart() and will be followed by
   * onDragStop() when complete.
   */
  onDragMove(pointer) {}

  /**
   * Called by InputAdapter after a drag ends. The input could be either an
   * Alt or non-Alt input.
   * Will always be called after onDragStart(). Although onDragMove may be
   * called in-between, it is not guaranteed.
   */
  onDragStop(pointer) {}

  /**
   * Called by InputAdapter after an InputEvent ends.
   */
  onPostInputEvent(pointer) {}

  /**
   * Called by InputAdapter when zoom changes.
   * Returns true if the zoom change can be applied to the current viewport.
   */
  onZoomChange(pointer, zoomValue, prevValue)
  {
    return true;
  }
}

export default AbstractInputController;
