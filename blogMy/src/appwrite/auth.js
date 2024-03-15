import conf from '../conf/conf.js'

import  {Client, Account, ID} from "appwrite"

// quality code
export class AuthService {
    client  = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    // instead of using promise using async - no further task before prev is finished
    // SIGN UP
    async createAccount ({email, password, name}){
        try {
            await this.account.create(ID.unique(),email, password, name);
            if(userAccount) {
                // call another method - directly loggen in 
                return this.login(email, password)
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    // SIGN IN
    async login ({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error){
            throw error;
        }
    }
    // CHEKENG LOGGED IN OR NOT
    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        // instead of if else if try and catch can't reach out
        return null;
    }

    async logout() {
        try{
            await this.account.deleteSessions();
        }catch(error){
            console.log("Appwrite service :: logout :: error", error)
        }
    }
}

const authService = new AuthService();

export default AuthService;