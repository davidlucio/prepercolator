import React from 'react';
import axios from 'axios';
import { Request } from 'react-axios';

export default class BusinessPortal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'ingredients',
            newIngredient: {
                ingredientName: '',
                ingredientType: null,
                isVegan: false,
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sellOutIngredient = this.sellOutIngredient.bind(this);
    }
    handleInputChange(event) {
        switch (event.target.type) {
            case 'checkbox': 
                const value = !this.state.newIngredient.isVegan;
                this.setState({newIngredient: { isVegan: value }})
                break;
            case 'text': 
                this.setState({ingredientName:event.target.value})
                break;
            case 'select':
                this.setState({ingredientType: event.target.key})
                break;
            default:
                break;
        }
    }
    sellOutIngredient(event){
        // const ingredientId = event.target.key;
        return event.target.key;
    }
    render() {
      return (
        <div className="businessPortal">
         <div className="bpViewSelect">
          <h1 className="bpWelcome">Welcome, {this.props.user.username}</h1>
          <button onClick={()=>this.setState({view: 'ingredients'})}>See Existing Ingredients</button>
          <button onClick={()=>this.setState({view: 'drinks'})}>See Existing Drinks</button>
         </div>
         {
             this.state.view === 'ingredients' 
             ? <Request
                instance={axios.create({})}
                method="get"
                url="http://localhost:3001/api/ingredient/"
                debounce={200}
                isReady={true}
                onSuccess={(response)=> {
                    return (
                        <div className="bpViewIngredients">
                         <div className="bpAvailable">
                       <h3>Available Ingredients:</h3>
                        <ul>
                         <li>Ingredient Name <span><button onClick={this.state.sellOutIngredient}>Sold Out</button><button onClick={this.state.removeIngredient}>Remove</button></span></li>
                        </ul>
                      </div>
                      <div className="bpActions">
                       <h3>Add a New Ingredient</h3>
                        <div>
                         <form>
                          <input name="ingredientName" type="text" placeholder="Name of Ingredient?"/>
                          <select name="ingredientType">
                           <option>Scoop</option>
                           <option>Pump</option>
                           <option>Squirt</option>
                           <option>Squeze</option>
                        { // Will Render our options from existing types...
                        //  this.state.ingredientType.map((type) => {
                        //   return (
                        //    <option key={type.id} value={type.typeNam{type.typeName}</option>
                        //   )
                        //  })
                        }
                          </select>
                          <label className="bpActionsCbLabel">
                          Vegan:
                           <input 
                            className="bpActionsCb"
                            name="isVegan" 
                            type="checkbox"
                            checked={this.state.isVegan}
                            onChange={this.handleInputChange}
                            />
                           </label>
                           {/* <button onClick={addNewIngredient}>Add Item</button> */}
                          </form>
                        </div>
                      </div>
                     </div>
                    )
                }}
                onLoading={()=>{
                    return (
                        <div>Loading...</div>
                    )
                }}
                onError={(error)=>{
                    return (
                        <div> {error} Something went wrong...</div>
                    )
                }}
                />
                :
                <Request
                 instance={axios.create({})}
                 method="get"
                 url="http://localhost:3001/api/drinks/"
                 debounce={200}
                 isReady={true}
                 onSuccess={(response)=>{
                     return (
                        <div className="bpViewDrinks">
                            <div className="bpAvailable">
                                <h3>Available Drinks:</h3>
                                <div className="bpDrink">
                                {/* Map drinks array and render drink card... */}
                                    <h5>Drink Name</h5>
                                    <ul>
                                        {/* Map ingredients array and render ingredients card... */}
                                        <li>Ingredient <span>Amount</span> <span>Unit</span></li>
                                    </ul>
                                </div>
                                <div className="bpActions">
                                    <h3>Add a New Drink</h3>
                                    <div>
                                        <form>
                                            <input name="bpDrinkName" type="text" placeholder="Name of Drink?"/>
                                            {/* <button onClick={addNewIngredient}>Add Item</button> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                     )
                 }}
                 onLoading={()=>{
                     return(
                         <div>Loading...</div>
                     )
                 }}
                 onError={(error)=>{
                     return(
                         <div>{error} occurred...?</div>
                     )
                 }}
                 />
         }
        </div>
      )
    }
}