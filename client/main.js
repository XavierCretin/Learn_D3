import angular from 'angular';
import angularMeteor from 'angular-meteor';
import photosListModule from '../imports/ui/components/photos-list/photos-list';//import un seul module


let module = angular.module('MyApp', [angularMeteor,photosListModule.name,'ngMaterial']);