import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MaplestoryHelperComponent } from './maplestory-helper/maplestory-helper.component';
import { BossCrystalsComponent } from './maplestory-helper/tools/boss-crystals/boss-crystals.component';
import { IedCalculatorComponent } from './maplestory-helper/tools/ied-calculator/ied-calculator.component';
import { UsefulResourcesComponent } from './maplestory-helper/tools/useful-resources/useful-resources.component';
import { AboutComponent } from './maplestory-helper/tools/about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
    { path: 'portfolio', component: PortfolioComponent },
    { 
        path: 'maplestory-helper', 
        component: MaplestoryHelperComponent,
        title: "Zydico's Maplestory Helper",
        children: [
            { path: '', redirectTo: 'boss-crystals', pathMatch: 'full' },
            {
                path: 'boss-crystals',
                component: BossCrystalsComponent
            },
            {
                path: 'ied-calculator',
                component: IedCalculatorComponent
            },
            {
                path: 'useful-resources',
                component: UsefulResourcesComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
        ]
     }
];

