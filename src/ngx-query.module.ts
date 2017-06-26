import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QueryComponent } from './query.component';
import { PlainComponent } from './plain/plain.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { GroupComponent } from './advanced/group.component';
import { RuleComponent } from './advanced/rule.component';

import { ValueInputTemplateDirective } from './directives/value-input-template.directive';
import { FieldDirective } from "./directives/field.directive";

import { QueryConfigurationService } from './services/configuration.service';

@NgModule({
  declarations: [
    QueryComponent,
    PlainComponent,
    AdvancedComponent,
    GroupComponent,
    RuleComponent,
    ValueInputTemplateDirective,
    FieldDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    QueryComponent,
    ValueInputTemplateDirective,
    FieldDirective
  ],
  providers: [
    QueryConfigurationService
  ]
})
export class NgxQueryModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxQueryModule
    };
  }

}