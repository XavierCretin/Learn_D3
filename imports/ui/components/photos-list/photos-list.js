import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularComponent from 'angular-component';
import templateUrl from './photos-list.html';/*sans cette ligne, message error "template does not exist"*/
import photosAddModule from '../photos-add/photos-add';
import photosSearchModule from '../photos-search/photos-search';
import {Photos} from '../../../../collections/photos';
class PhotosListCtrl {
    constructor($scope, $reactive) {
        $reactive(this).attach($scope);
        this.sortType     = 'name'; // set the default sort type
        this.sortReverse  = false;  // set the default sort order
        
        this.helpers({
            photos() {
                return Photos.find({});
            }
        });
    }
}     
const name = 'photosList';
// create a module
export default angular.module(name, [angularMeteor, photosAddModule.name,photosSearchModule.name, 'ngMaterial'])

.component(name, {
    templateUrl,
   /* controllerAs: name, if not define you use $ctrl in the template, if yes you use the name*/
    controller: PhotosListCtrl
});