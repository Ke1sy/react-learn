import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

/*----- TIMER -----*/
//
// function AddNull (val) {
// 	return val > 9 ? val : '0' + val;
// }
//
// function DeleteLink() {
// 	function onClick (e) {
// 		console.log(123);
// 		e.preventDefault();
// 	}
//
// 	return (
// 		<a href="#" onClick={onClick}>
// 			Удалить
// 		</a>
// 	)
//
// }

// class Timer extends React.Component {
// 	constructor (props) {
// 		super(props);
// 		this.state = {
// 			value: props.value ? props.value : 0,
// 			interval: props.interval ? props.interval : 100,
// 		}
// 	}
// 	render() {
// 		const value = this.state.value;
// 		const interval = this.state.interval;
// 		return (
// 			<div>
// 				<h3>Таймер:</h3>
// 				<p>
// 					<span>{AddNull(Math.round(value / interval / 60 / 60))} : </span>
// 					<span>{AddNull(Math.round(value / interval / 60))} : </span>
// 					<span>{AddNull(Math.round(value / interval))} . </span>
// 					<span>{AddNull(value % interval)}</span>
// 				</p>
// 				<DeleteLink/>
// 			</div>
// 		);
// 	}
// 	increment() {
// 		this.setState({value: this.state.value + 1});
// 	}
//
// 	componentDidMount() {
// 		this.timerID = setInterval(() => this.increment(), 1000 / this.state.interval);
// 	}
//
// 	componentWillUnmount() {
// 		clearInterval(this.timerID);
// 	}
// }

/*----- Conditioner  (setState with prevState / methods)-----*/
//
// class Conditioner extends React.Component {
// 	constructor (props) {
// 		super(props);
// 		this.state = {
// 			temperature: 0
// 		};
// 	}
//
// 	onIncrease = () => {
// 		this.setState(prevState => ({
// 			temperature: prevState.temperature + 1
// 		}))
// 	};
//
// 	onDecrease = () => {
// 		this.setState(prevState => ({
// 			temperature: prevState.temperature > 0 ? prevState.temperature - 1 : 0
// 		}))
// 	};
//
// 	render () {
// 		return (
// 			<div>
// 				<p>Текущая темперетура: {this.state.temperature}</p>
// 				<button onClick={this.onDecrease}>-</button>
// 				<button onClick={this.onIncrease}>+</button>
// 			</div>
// 		);
// 	}
// }

/*----- FireButton (condition  "if/else" "?:" ) -----*/
function FireButton (props) {
	return (
		<button onClick={props.callback} className={props.className}>
			{props.text}
		</button>
	)
}

class FirePlace extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			active: false,
		};
	}

	onClick = () => {
		this.setState(prevState => ({
			active: !prevState.active
		}))
	};

	getIndicatorText = () => {
		return this.state.active ? 'Выключить' : 'Включить'
	};

	render () {
		return (
			<div>
				<p>Включен: {"" + this.state.active}</p>
				<FireButton
					callback={this.onClick}
					className={this.state.active ? 'orange' : 'blue'}
					text={this.getIndicatorText()}
				/>
			</div>
		)
	}
}

//
// const users = ['Вася', 'Петя', 'Максим', 'Егор', 'Витя'];
//
// function getKey(str){
// 	let key = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		key += str.charCodeAt(i);
// 	}
// 	return key.toString();
// }
//
// function UserList(props){
// 	const users = props.users;
// 	const items  = users.map(user => {
// 		const key = getKey(user);
// 		return <li key={key}>{user}</li>;
// 	});
// 	return(
// 		<ul>{items}</ul>
// 	)
// }
//
// const users = [
// 	{id: 1, name: 'Вася'},
// 	{id: 2, name: 'Петя'},
// 	{id: 3, name: 'Ваня'}
// ];
//
// const messages = [
// 	{id: 1, message: 'Всем привет!', authorId: 1},
// 	{id: 2, message: 'И тебе привет!', authorId: 2},
// 	{id: 3, message: 'Привет, Вася :)', authorId: 3}
// ];
//
// function Chat (props) {
// 	const users = props.users;
//
// 	const UsersList = (
// 		<p>
// 			Пользователи чата:
// 			{users.map(user => <b key={user.id}> {user.name} </b>)}
// 		</p>
// 	);
//
// 	const UsersMessages = props.messages.map(message => {
// 		let author = null;
// 		users.forEach(user => {
// 			if (user.id === message.authorId) {
// 				author = user;
// 			}
// 		});
// 		return (
// 			<div key={message.id}>
// 				<p>Сообщение: {message.message}</p>
// 				<p>Автор: <i>{author.name}</i></p>
// 			</div>
// 		)
// 	});
//
// 	return (
// 		<div>
// 			{UsersList}
// 			{UsersMessages}
// 		</div>
// 	);
// }

class LoginForm extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			login: '',
			password: '',
			message: 'Text of the message...',
			language: 'JavaScript',
			langList: [
				'C++', 'JavaScript', 'Scala', 'Java'
			]
		}
	}

	onSubmit = (e) => {
		alert(this.state.login + ', добро пожаловать! Ваш пароль: ' + this.state.password + ' mess:' + this.state.message + ' Lang:' + this.state.language);
		e.preventDefault();
	};

	onChangeInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	render () {
		return (
			<form onSubmit={this.onSubmit}>
				<p>
					<label>Login: <input type="text" name="login" value={this.state.login} onChange={this.onChangeInput}/></label>
				</p>
				<p>
					<label>Password: <input type="password" name="password" value={this.state.password} onChange={this.onChangeInput}/></label>
				</p>
				<p>
					<label>Your
						Message: <textarea name="message" value={this.state.message} onChange={this.onChangeInput}/></label>
				</p>
				<p>
					<label>
						Выберите язык программирования:
						<select value={this.state.language} onChange={this.onChangeInput} name="language">
							{this.state.langList.map((option, index) =>
								<option value={option} key={index}>{option}</option>)}
						</select>
					</label>
				</p>
				<input type="submit" value="Отправить"/>
			</form>
		)
	}
}

const MAX_SPEED_IN_CITY_IN_KPH = 60;

function SpeedDetector (props) {
	const speedAbandoned = props.speed >= props.maxSpeed;
	return (
		<div style={{color: speedAbandoned ? 'red' : 'green'}}>
			{speedAbandoned ? 'Скорость превышена' : 'Скорость норм'}
		</div>
	)
}

const UNIT = {
	KPH: 'Км/ч',
	MPH: 'Миль/ч'
};

function convertToKph (mph) {
	return mph * 1.61;
}

function convertToMph (kph) {
	return kph / 1.61;
}

function isValidSpeed (value) {
	if (value !== null && value !== '' && value !== undefined) {
		let intValue = parseInt(value);
		return !(isNaN(intValue) || !isFinite(intValue));
	}
	return false
}

function convertSpeed (value, convertor) {
	if (isValidSpeed(value)) {
		const intValue = parseInt(value);
		let converted = convertor(intValue);
		let rounded = Math.round(converted * 100) / 100;
		return rounded.toString()
	}
	return '';
}

class SpeedRadar extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			speed: 0,
			unit: 'KPH'
		};
	}

	onChangeSpeedInKph = (speed) => {
		this.setState({
			unit: 'KPH',
			speed: speed
		})
	};

	onChangeSpeedInMph = (speed) => {
		this.setState({
			unit: 'MPH',
			speed: speed
		})
	};

	render () {
		const speed = this.state.speed;
		const unit = this.state.unit;
		const kph = unit === 'KPH' ? speed : convertSpeed(speed, convertToKph);
		const mph = unit === 'MPH' ? speed : convertSpeed(speed, convertToMph);
		return (
			<div>
				<SpeedSetter unit="KPH" speed={kph} onChangeSpeed={this.onChangeSpeedInKph}/>
				<SpeedSetter unit="MPH" speed={mph} onChangeSpeed={this.onChangeSpeedInMph}/>
				<SpeedDetector speed={kph} maxSpeed={MAX_SPEED_IN_CITY_IN_KPH}/>
			</div>
		)
	}
}

class SpeedSetter extends React.Component {
	constructor (props) {
		super(props);
	}

	onChange = (e) => {
		this.props.onChangeSpeed(e.target.value);
	};

	render () {
		const unit = this.props.unit;
		const speed = this.props.speed;
		return (
			<div className="form-group">
				<label> <span style={{paddingRight: '10px'}}>Введите скорость в {UNIT[unit]}:</span>
					<input value={speed} type="text" onChange={this.onChange}/>
				</label>
			</div>
		)
	}

}

//products table with search

class FilterableProductTable extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			products: [],
			searchText: '',
			onlyInStock: false,
		}
	}

	onChangeForm = (input) => {
		let checkbox = input.type === 'checkbox';
		this.setState({
			[input.name]: checkbox ? input.checked : input.value
		})
	};

	render () {
		return (
			<div className="products">
				<SearchBar searchText={this.state.searchText} onlyStock={this.state.onlyInStock} onChangeForm={this.onChangeForm}/>
				<ProductTable products={this.state.products} onlyStock={this.state.onlyInStock} searchText={this.state.searchText}/>
			</div>
		)
	}

	componentDidMount () {
		fetch('./products.json')
		.then(response => response.json())
		.then(result => {
			this.setState({
				products: result
			})
		})
		.catch(e => {
			console.log(e);
		});

	}
}


class SearchBar extends React.Component {
	constructor (props) {
		super(props);
	}

	changeInput = (e) => {
		this.props.onChangeForm(e.target);
	};

	render () {
		const searchText = this.props.searchText;
		const inStock = this.props.onlyStock;

		return (
			<form className="form">
				<div className="form-group">
					<input type="text" value={searchText} name="searchText" onChange={this.changeInput}   placeholder="Search..."/>
				</div>
				<div className="form-group">
					<label>
						<input type="checkbox" checked={inStock} name="onlyInStock" onChange={this.changeInput}/>
						Only show products in stock
					</label>
				</div>
			</form>
		)
	}
}

class ProductTable extends React.Component {
	constructor (props) {
		super(props)
	}

	filterByCategory = (category) => {
		return this.props.products.filter(product => product.category === category);
	};

	render () {
		const onlyStock =  this.props.onlyStock;
		const searchText =  this.props.searchText;
		const categories = [...new Set( this.props.products.map(item => item.category))];

		return (
			<div className="products__table">
				<div className="row">
					<div className="cell">Name</div>
					<div className="cell">Price</div>
				</div>

				{
					categories.map((category, k) => {
						let categoryProds = this.filterByCategory(category);

						return (
							<div key={k}>
								<ProductCategory title={category} />
								{
									categoryProds.map((prod, i) => {
										if(prod.name.indexOf(searchText) === -1) {
											return false;
										}

										if(onlyStock && !prod.stocked) {
											return false;
										}

										return <ProductItem product={prod} key={k+'.'+i}/>;
									})
								}
							</div>

						)
					})
				}

			</div>
		)
	}

}

function ProductCategory (props) {
	return (
		<div className="products__category">
			{props.title}
		</div>
	)
}

function ProductItem (props) {
	let inStockClass = !props.product.stocked ? ' red' : '';
	return (
		<div className="products__item">
			<div className="row">
				<div className={'cell' + inStockClass}>
					{props.product.name}
				</div>
				<div className="cell">
					{props.product.price}
				</div>
			</div>
		</div>
	)
}

ReactDOM.render(
	<Application/>,
	document.getElementById('root')
);

// ReactDOM.render(
// 	<LoginForm/>,
// 	document.getElementById('root-2')
// );

function Application () {
	return (
		<div>
			<FilterableProductTable/>
			{/*<FirePlace/>*/}
			{/*<SpeedRadar/>*/}
			{/*<Chat users={users} messages={messages}/>*/}
			{/*<Timer/>*/}
			{/*<Conditioner/>*/}
			{/*<Response/>*/}
		</div>
	);
}

serviceWorker.register();
