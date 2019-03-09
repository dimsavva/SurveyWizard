import { Component } from '@angular/core';
import { Data } from './data';
import { Facets } from './facets'
import { Drivers } from './drivers'
import { DriverQuestions } from './driver-questions'
import { Dimensions } from './dimensions'
import { OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from '@progress/kendo-data-query';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'


})
export class AppComponent implements OnInit {

    constructor(private formBuilder: FormBuilder) {
    }

    public Dimensions: Dimensions[] = Data;
    public Facets: Facets[];
    public Drivers: Drivers[];

    public DriverQuestions: DriverQuestions[];

    public facetGridData: any[] = [];
    public driverGridData: any[] = [];
    public questionGridData: any[] = [];

    public selectedFacetId: number;
    public selectedDriverId: number;
    public selectedQuestionId: number;

    public showDrivers: boolean = false;
    public showQuestions: boolean = false;

    public newFacet: string;
    public newDriver: string;
    public newQuestion: string;


    ngOnInit() {

        this.Facets = this.Dimensions[0].Facets;
        this.facetGridData = this.Dimensions[0].Facets;
    }

    onSelectFacet(e: any) {

        this.selectedFacetId = e.selectedRows[0].dataItem.Id;
        this.Drivers = this.Facets.find(l => l.Id == this.selectedFacetId).Drivers;
        this.driverGridData = this.Drivers;
        this.showDrivers = true;
        this.showQuestions = false;
        
    }
    onSelectDriver(e: any) {

        this.selectedDriverId = e.selectedRows[0].dataItem.Id;
        this.DriverQuestions = this.Drivers.find(l => l.Id == this.selectedDriverId).DriverQuestions;
        this.questionGridData = this.DriverQuestions;
        this.showQuestions = true;

    }

  
    public AddFacet() {

        if (this.newFacet != "") {
            this.Facets.push({
                Id: this.SetNewId(this.Facets),
                Description: this.newFacet,
                Drivers: []
            });
            this.newFacet = "";
        }
    }

    public AddDriver() {


        if (this.newDriver != "") {
            this.Drivers.push({
                Id: this.SetNewId(this.Drivers),
                Description: this.newDriver,
                DriverQuestions: []
            });
            this.newDriver = "";
        }
    }


    public AddQuestion() {

        if (this.newQuestion != "") {
            this.DriverQuestions.push({
                Id: this.SetNewId(this.DriverQuestions),
                Description: this.newQuestion,
                IsNegative:false
            });
            this.newQuestion = "";
        }
    }

    public SetNewId(array: any[]): number {


        if (array.length != 0) {
            return array[array.length - 1].Id + 1;
        }
        else {

            return 1

        }

    }

    public removeFacetHandler({ dataItem }) {

        let item = this.Facets.find(l => l.Id == dataItem.Id);
        const index: number = this.Facets.indexOf(item);
        if (index !== -1 && item.Drivers.length === 0) {
            this.Facets.splice(index, 1);
            if (dataItem.Id == this.selectedFacetId) {
                this.showDrivers = false;
            }
        }
    }

    public removeDriverHandler({ dataItem }) {

        let item = this.Drivers.find(l => l.Id == dataItem.Id);
        const index: number = this.Drivers.indexOf(item);
        if (index !== -1 && item.DriverQuestions.length === 0) {
            this.Drivers.splice(index, 1);
            if (dataItem.Id == this.selectedDriverId) {
                this.showQuestions = false;
            }
        }
    }

    public removeQuestionHandler({ dataItem }) {

        let item = this.DriverQuestions.find(l => l.Id == dataItem.Id);
        const index: number = this.DriverQuestions.indexOf(item);
        if (index !== -1) {
            this.DriverQuestions.splice(index, 1);
            if (dataItem.Id == this.selectedQuestionId) {
                this.showQuestions = false;
            }
        }
    }

    selectNegative(e:any, dataItem: any) {
        console.log(e)

    console.log(dataItem)
        let item = this.DriverQuestions.find(l => l.Id == dataItem.Id);

        item.IsNegative = e.target.checked;


    }


    public cellClickHandler({ sender, rowIndex, columnIndex, dataItem, isEdited }) {
        if (!isEdited) {
            sender.editCell(rowIndex, columnIndex, this.createFormGroup(dataItem));
        }
    }

    public cellCloseHandler(args: any) {
        const { formGroup, dataItem } = args;

        if (!formGroup.valid) {
            args.preventDefault();
        } else if (formGroup.dirty) {

            dataItem.Description = formGroup.value.Description;
        }
    }


    public createFormGroup(dataItem: any): FormGroup {

        return this.formBuilder.group({
            'Id': dataItem.Id,
            'Description': [dataItem.Description, Validators.required]
        });
    }

}
