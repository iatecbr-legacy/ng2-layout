import { Component } from '@angular/core';
//import { EntityModel, ProfileModel, NotificationModel, LanguageModel, MenuItemModel } from '../../projects/iatec-layout/src/lib/models';
//import { InternalMenuItemModel } from '../../projects/iatec-layout/src/lib/models/internal-menu-item.model'

  import {
    ProfileModel,
    EntityModel,
    NotificationModel,
    LanguageModel,
    MenuItemModel }
  from '@iatec/ng2-layout';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    profile         : ProfileModel = new ProfileModel();
    entities        : Array<EntityModel> = [];
    currentEntity   : EntityModel = new EntityModel();
    notifications   : Array<NotificationModel> = [];
    languages       : Array<LanguageModel> = [];
    selectedLanguage: LanguageModel;
    loadingMenu     : boolean = false;
    loading         : boolean = false;
    menus           : Array<MenuItemModel> = [];
    constructor() {
        this.getProfile();
        this.getMenus();
        this.getLanguages();
        this.getEntities();
        this.getNotification();
        this.getDefaultLanguage();
    }
    onChangeEntity(event: EntityModel) {
        console.log('action changeEntity!', event);
        this.currentEntity = { ...event };
    }
    onClickLanguage(event: any) {
        console.log('action clickLanguage!', event);
        this.selectedLanguage = event;
    }
    onClickMenu(event: any) {
        console.log('action clickMenu!', event);
    }
    onClickFavorite(event: any) {
        console.log('action clickFavorite!', event);
    }
    onAllEntities(event: any) {
        console.log('action AllEntitites!', event);
    }
    onAllNotification(event: any) {
        console.log('action AllNotification!', event);
    }
    onClickNotification(event: any) {
        console.log('action clickNotification!', event);
    }
    onClickAccount(event: any) {
        console.log('action clickAccount!', event);
    }
    onClickSignOut(event: any) {
        console.log('action clickSignOut!', event);
    }
    getLanguages() {
        this.languages = [
            { id: 1, name: 'Portugues', code: 'pt-BR', imageURL: '../assets/flags/BR.png' },
            { id: 2, name: 'English'  , code: 'us-EN', imageURL: '../assets/flags/CC.png'    },
            { id: 3, name: 'Español'  , code: 'es-ES', imageURL: '../assets/flags/BZ.png'    }
        ];
    }
    getMenus() {
        this.menus = [
            <MenuItemModel>{ id: 1, title: 'Menu 1'         , target: 'rota'              },
            <MenuItemModel>{ id: 2, title: 'Menu 2'                                       },
            <MenuItemModel>{ id: 3, title: 'Sub Menu 2'                     , parentId: 2 },
            <MenuItemModel>{ id: 4, title: 'Sub Menu, Sub 2', target: 'rota', parentId: 3 },
            <MenuItemModel>{ id: 5, title: 'Sub Menu, Sub 2', target: 'rota', parentId: 3 }
        ];
    }
    getProfile() {
        this.profile.email     = 'email at domain dot com';
        this.profile.firstName = 'Name';
        this.profile.lastName  = 'of User';
        this.profile.username  = 'user.login';
        this.profile.imgURL    = 'https://lh3.googleusercontent.com/oKsgcsHtHu_nIkpNd-mNCAyzUD8xo68laRPOfvFuO0hqv6nDXVNNjEMmoiv9tIDgTj8=w170';
    }
    getEntities() {
        let entities: Array<EntityModel> = [
            <EntityModel>{ id: 1, codeEntity: '1111', name: 'Nome Entidade 1' },
            <EntityModel>{ id: 2, codeEntity: '2222', name: 'Nome Entidade 2' },
            <EntityModel>{ id: 3, codeEntity: '3333', name: 'Nome Entidade 3' }
        ];
        this.entities = entities;
        let entity = entities[0];
        this.currentEntity = { ...entity };
    }
    getNotification() {
        let notification: NotificationModel = new NotificationModel();
        notification.id          = 0;
        notification.description = 'Notification 01';
        notification.imgURL      = '';
        notification.size        = '10';
        notification.title       = 'Notification 01';
        this.notifications.push(notification);
    }
    getDefaultLanguage() {
        this.selectedLanguage = { id: 1, name: 'Portugues', code: 'pt-BR', imageURL: '../assets/flags/BR.png'};
    }
}
