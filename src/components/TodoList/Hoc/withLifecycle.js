import { lifecycle } from 'recompose';
import TodoStore  from '../../../stores/TodoStore'
const componentWillMount = lifecycle({
    componentWillMount() {
        console.log('did mount')
        TodoStore.getTotoList();
    }
})

export default componentWillMount;