// import react from 'react'
import './checkbox.styles.css'

const Checkbox = () => {
    return (<form>
        <input id="dark-mode" class="toggle" type="checkbox" name="Dark mode" role="switch" value="on">
            <label for="dark-mode" class="sr">Dark Mode</label>
            <div class="curtain"></div>
        </input>
    </form>)
}

export default Checkbox;