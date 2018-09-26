'use strict';

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const el = React.createElement;

function newTodo() {
  ReactDOM.render(el(ToDoList, { renderNewTodo: true }), list);
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      renderNewTodo: this.props.renderNewTodo
    }
    this.updateList = this.updateList.bind(this);
    this.updateTotalCount = this.updateTotalCount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateUncheckedCount = this.updateUncheckedCount.bind(this);
  }

  updateTotalCount() {
    itemCountSpan.innerText = this.state.todoList.length;
  }

  updateList(value, enterPressed) {
    this.setState(
      {
        todoList: [...this.state.todoList, { todoItem: value, checked: false }],
        renderNewTodo: enterPressed
      },
      () => {
        this.updateTotalCount();
        this.updateUncheckedCount();
      }
    )
  }

  updateUncheckedCount() {
    uncheckedCountSpan.innerText = this.state.todoList.filter((item) => { return !item.checked }).length;
  }

  handleChange(index, e) {
    let todoList = this.state.todoList;
    todoList[index].checked = e.target.checked;
    this.setState({ todoList }, this.updateUncheckedCount());
  }

  handleDelete(index, e) {
    let todoList = this.state.todoList.slice();
    todoList.splice(index, 1);
    this.setState({ todoList }, () => {
      this.updateTotalCount();
      this.updateUncheckedCount();
    });
  }

  componentWillReceiveProps(props) {
    this.setState({ renderNewTodo: props.renderNewTodo });
  }

  render() {
    return (
      el('div',
        null,
        this.state.todoList.map((item, index) => {
          return (
            el(Todo, { key: index, handleChange: this.handleChange, handleDelete: this.handleDelete, item: item, index: index })
          )
        }),
        this.state.renderNewTodo ? el(CreateToDo, { updateList: this.updateList }) : ""
      )
    )
  }
}

function Todo(props) {
  return (
    el('li',
      { style: { position: 'relative' }, className: classNames.TODO_ITEM },
      el('span',
        { className: 'checkbox' },
        el('input',
          { type: 'checkbox', onChange: function (e) { props.handleChange(props.index, e) } }
        )
      ),
      " ",
      props.item.todoItem,
      " ",
      el('span',
        { className: classNames.TODO_DELETE },
        el('button',
          { onClick: function (e) { props.handleDelete(props.index, e) }, className: 'button center' }, 'X'
        )
      )
    )
  )
}

class CreateToDo extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.textInputRef = React.createRef();
  }

  handleKeyPress(e) {
    let key = e.which || e.keyCode;
    if (key === 13 && e.target.value.length) {
      const enterPressed = true;
      this.handleSave(enterPressed);
    }
  }

  handleSave(enterPressed, e) {
    this.props.updateList(document.getElementById('inputField').value, enterPressed);
    this.textInputRef.current.value = "";
  }

  componentDidMount() {
    this.textInputRef.current.focus();
  }

  render() {
    return (
      el('div',
        {
          id: 'newTodo',
          className: classNames.TODO_TEXT,
          style: { position: 'relative' }
        },
        el('input',
          {
            type: 'text',
            id: 'inputField',
            placeholder: 'Enter a todo item',
            ref: this.textInputRef,
            onKeyPress: this.handleKeyPress.bind(this)
          }),
        el('button',
          {
            onClick: this.handleSave.bind(this, false),
            className: 'button center',
            style: { position: 'absolute', right: '20px', top: '8px' }
          },
          '\u2713'
        )
      )
    )
  }
}
