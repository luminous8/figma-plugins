import { render } from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import '!./output.css'

function Plugin () {
  function handleClick() {
    console.log('handleClick')
    emit('create-frame-with-button')
  }

  return (
    <div class="flex flex-col items-center justify-center h-full w-full bg-gray-900">
      <button
        class="px-6 py-3 rounded bg-gray-800 text-white font-semibold shadow hover:bg-gray-700 transition"
        onClick={handleClick}
        type="button"
      >
        Create Frame with Button
      </button>
    </div>
  )
}

export default render(Plugin)
