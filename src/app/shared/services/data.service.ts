import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userList: User[] = [];
  itemsInCart: IProduct[] = [];
  products: IProduct[] = [
    {
      id: '0',
      pName: 'Fireball Jutsu',
      image: 'assets/fireballJutsu.png',
      pDesc: 'Leave your advesaries toasty!',
      price: "10000",
      additionalInfo: "The user expels a large orb of flames with the power to extensively burn enemies and crater the ground. Any alive will typically be charred and unable to continue the fight.",
      pNameURL: "",
      quantity: 0,
      pType: 'jutsu'

    },

    {
      id: '1',
      pName: 'Chidori',
      image: 'assets/chidori.jpg',
      pDesc: 'Pierce the hearts of your loved ones and the competition',
      price: "400000",
      additionalInfo: "An attack designed for a quick lethal finish. The user gains enourmous speed, while charging at their opponent with a concentrated amount of lightning in the palm of their hand to pierce the enemy. Best used with a Sharingan to avoid the tunnel-vision drawback induced from high speeds.",
      pNameURL: "Chidori",
      quantity: 0,
      pType: 'jutsu'

    },

    {
      id: '2',
      pName: 'Rasengan',
      image: 'assets/Rasengan.png',
      pDesc: 'Send enemies flying like a helicopter',
      price: "500000",
      additionalInfo: "A dangerous and deadly attack of compressed and refined chakra. The orb on contact grinds into target, propels them along the Rasengan's trajectory - either away from the user or into the ground beneath them - and at some point bursts, causing severe damage at the point of contact.",
      pNameURL: "Rasengan",
      quantity: 0,
      pType: 'jutsu'

    },

    {
      id: '3',
      pName: 'Shadow Clone Jutsu',
      image: 'assets/shadowClone.png',
      pDesc: 'Who needs friends when you have yourself',
      price: "1000000",
      additionalInfo: "This jutsu allows the user to create one or more copies of themselves. The user splits their chakra evenly between every copy of themselves created, but each copy can move independlty or as a hivemind on a whim as extensions of the user. The knowledge and experiences gained by the clones return to the user when disperesed allowing the user to gain a month's worth of training and studying in a singular day depending on the amount of clones created.",
      pNameURL: "ShadowCloneJutsu",
      quantity: 0,
      pType: 'jutsu'

    },

    {
      id: '4',
      pName: 'Impure World Reincarnation',
      image: 'assets/resurrection.png',
      pDesc: "Let's be real you can't afford this",
      price: "1000000000000000",
      additionalInfo: "The user offers a living human sacrifice and the DNA of the intended target in order to resurrect the target back to the world of the living. The reincarnated target's soul is bound to an immortal body that only appears slightly off in terms of physical apperance, but they are restored close to their prime in terms of abilities. The user can either completely control the reincarnated or give them free will.",
      pNameURL: "ImpureWorldRessurection",
      quantity: 0,
      pType: 'jutsu'
    },
    {
      id: '5',
      pName: 'Byakugan',
      image: 'assets/Byakugan.png',
      pDesc: 'See right thru your enemies',
      price: '500000',
      additionalInfo: "Offers the user a near 360 diameter field of sight, preventing users from being snuck up on. Also allows the user to see through their opponents and determine whether they or others are under the influence of genjutsu. It also exposes the location of chakra points on whoever the eyes are looking at that allows the user to specifically target them for attacks to reduce the opponents access to their chakra reserves potentially incapacitating them in the process.",
      pNameURL: "Byakugan",
      quantity: 0,
      pType: 'genetic'
    }

    , {
      id: '6',
      pName: 'Sharingan',
      image: 'assets/Sharingan.png',
      pDesc: "Copy everyone's moves with no effort",
      price: '1000000',
      additionalInfo: "Allows the user to copy the techniques of others friend and foe alike upon seeing the technique just once. The user is also able to read their opponents movements and percieve events around them with great depth allowing fluidity in combat that is unrivaled. The user is also highly resitant to illusions cast upon them by others unless they are up against a more powerful Sharingan user.",
      pNameURL: "Sharingan",
      quantity: 0,
      pType: 'genetic'
    }
    , {
      id: '7',
      pName: 'Mangekyo Sharingan',
      image: 'assets/mangekyo.png',
      pDesc: 'Cast illusions that last a lifetime',
      price: '10000000',
      additionalInfo: "The advanced variation of the Sharingan possessing all of the original's abilities with exclusive and unique abilities of it's own. User's can ignite black flames that can't be extinguished, cast powerful illusions, summon an etheral being for offensive and defensive utility and each Mangekyo comes equipped with an ability unique to the user. Examples of said abilities include phasing thru matter, advanced control over the black flames and the ability to reverse time to name a few.",
      pNameURL: "MangekyoSharingan",
      quantity: 0,
      pType: 'genetic'
    }
    , {
      id: '8',
      pName: 'Rinnegan',
      image: 'assets/Rinnegan.png',
      pDesc: 'A swiss army knife in the form of an eyeball',
      price: '10000000000',
      additionalInfo: "The one of the final evolutions of the Sharingan that has been infused with DNA of the Senju bloodline. The eyes grant the user incredible chakra and power along with the ability to master virtually any technique with ease. The eyes grant the user various other abilities such as the ability to repel and attract objects using telekenetic force, remove souls from others, absorb chakra based attacks with a force field, and summon virtually immortal animals at their beck and call.",
      pNameURL: "Rinnegan",
      quantity: 0,
      pType: 'genetic'
    }
    , {
      id: '9',
      pName: 'Hashirama Cells',
      image: 'assets/hashiramaCells.png',
      pDesc: 'Have access to abilities that cannot be explained without this plot device',
      price: '1000000000',
      additionalInfo: "A genetic implant that allows user to gain many of the various abilities and benefits that originate from the Senju clan and Hashirama Senju himself. Various benefits include enhanced chakra reserves, enhanced healing abilities and the ability to use Wood Style techniques that were exclusive to Hashirama himself. The implant also allows a Sharingan to potentially evolve into the Rinnegan and gain those benefits.",
      pNameURL: "HashiramaCells",
      quantity: 0,
      pType: 'genetic'
    }
  ];
  constructor() { }

  getProducts(): IProduct[] {
    return this.products;
  }

  findProduct(sku: string): Observable<IProduct> {
    return of(
      this.products.find(
        somethingElse => somethingElse.id === sku
      ));
  }

  addToCart(cartItem: IProduct) {
    if (this.itemsInCart.includes(cartItem)) {
      cartItem.quantity++;
      this.itemsInCart.push(cartItem);
      console.log(this.itemsInCart)
    }
    else {
      //We are going to search for the item in user's cart and +1 to quantity
      //
    }
  }

  getCartItems(): IProduct[] {
    return this.itemsInCart;
  }

  emptyCart() {
    this.itemsInCart.length = 0;
  }

  removeItemFromCart(itemsToRemove: IProduct): void {
    //Search for product and remove it from itemsInCart
    //Find the index location of product
    const index = this.findItemInCart(itemsToRemove);
    //perform a splice 
    this.itemsInCart[index].quantity = 0;
    this.itemsInCart.splice(index, 1);
  }

  findItemInCart(id: IProduct): number {
    //We are going to find the id in our cart
    return this.itemsInCart.indexOf(id);
  }

  checkCred(userName: string, passWord: string): boolean {
    let result = false;
    if (userName === this.userList[0].userName) {
      if (passWord === this.userList[0].passWord){
        result = true;
      }
    }
    return result;
  }
  
  checkIfUserExists(userName: string): boolean {
    //going to search for userName
    let result = false;
    if (this.userList.find(x => userName.toLowerCase() === x.userName) !== undefined) {
      result = true;
    }
    return result;
  }

  addUser(userAccount: User) {
    // const userAccount: User = {
    //   userName: uN.toLowerCase(),
    //   passWord: pW
    // };
    this.userList.push(userAccount);
    localStorage.setItem('users', JSON.stringify(this.userList));
  }

  setUserList(){
    if(JSON.parse(localStorage.getItem('user'))){
      this.userList = JSON.parse(localStorage.getItem('user'));
    }
  }

}
