import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afAuth: AngularFireAuth,
    private db: AngularFirestore,) { }

    getAllUsers(){
      return this.db.collection("Account").snapshotChanges()
    }

    getAllTransactions(){
      return this.db.collection("Transactions").snapshotChanges()
    }

    getWithdrawTransactions(){
      return this.db.collection("Transactions",ref => ref.where("transactionType","==","withdraw")).snapshotChanges()
    }

    getDepositTransactions(){
      return this.db.collection("Transactions",ref => ref.where("transactionType","==","deposit")).snapshotChanges()
    }

    

    getTransactionByType(val: any){
      return this.db.collection("Transactions",ref => ref.where("transactionType","==",val)).snapshotChanges()
    }

    getTotalDailyTransactions(day:any){
      return this.db.collection("Transactions",ref => ref.where("day","==",day)).snapshotChanges()
    }

    getTotalMonthlyTransactions(month:any){
      return this.db.collection("Transactions",ref => ref.where("month","==",month)).snapshotChanges()
    }

    getTotalYearlyTransactions(year:any){
      return this.db.collection("Transactions",ref => ref.where("year","==",year)).snapshotChanges()
    }

    getMessage(){
      return this.db.collection("GlobalMsg").snapshotChanges()
    }

    getTxtMessage(){
      return this.db.collection("GlobalMsg",ref => ref.where("type","==","txt")).snapshotChanges()
    }

    getGroupTxtMessage(){
      return this.db.collection("GlobalMsg",ref => ref.where("type","==","group_txt")).snapshotChanges()
    }

    getTotalDailyMessages(day:any){
      return this.db.collection("GlobalMsg",ref => ref.where("day","==",day)).snapshotChanges()
    }

    getTotalMonthlyMessages(month:any){
      return this.db.collection("GlobalMsg",ref => ref.where("month","==",month)).snapshotChanges()
    }

    getTotalYearlyMessages(year:any){
      return this.db.collection("GlobalMsg",ref => ref.where("year","==",year)).snapshotChanges()
    }

    getMessageBy(val:any){
      return this.db.collection("GlobalMsg",ref => ref.where("type","==",val)).snapshotChanges()
    }
}
