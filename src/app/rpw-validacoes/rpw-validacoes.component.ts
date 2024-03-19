import { Component,ViewChild  } from '@angular/core';
import { PoModalComponent, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-rpw-validacoes',
  templateUrl: './rpw-validacoes.component.html',
  styleUrls: ['./rpw-validacoes.component.scss']
})
export class RpwValidacoesComponent {
  @ViewChild('detailsModal', { static: true }) detailsModalElement!: PoModalComponent;

  paymentLink: string = 'https://www.google.com.br/search?q=days+to+payment';
  itemsDetails!: Array<any>;
  titleDetailsModal!: string;
  typeChart: string = 'line';

  rpwData = [
    { programa: 'et2410', lastUpdated: '18:34', lastRun: 'error' },
    { programa: 'et3232', lastUpdated: '19:20', lastRun: 'ok'  },
    { programa: 'et2410', lastUpdated: '18:34', lastRun: 'error'  },
    { programa: 'et3232', lastUpdated: '19:20', lastRun: 'ok'  },
    { programa: 'et2410', lastUpdated: '18:34', lastRun: 'error'  },
    { programa: 'et3232', lastUpdated: '19:20', lastRun: 'error'  },
    { programa: 'et2410', lastUpdated: '18:34', lastRun: 'ok'  },
    { programa: 'et3232', lastUpdated: '19:20', lastRun: 'error'  },  
  ];

  
  openTab(url:any){
    window.open(url, '_blank');
  }

  validBg(lastRun:any){
    if(lastRun == 'error'){
      return './assets/bkg/error.png';
    }else{
      return '';
    }
  }

  public readonly columnsDetails: Array<PoTableColumn> = [
    { property: 'dateUpdate', label: 'Date update', type: 'date' },
    { property: 'statement', label: 'Statement', type: 'currency' }
  ];

  public readonly itemsAccountDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-56.45' },
    { dateUpdate: '02-05-2018', statement: '-14.99' },
    { dateUpdate: '02-05-2018', statement: '-657.56' },
    { dateUpdate: '12-05-2017', statement: '3547.29' }
  ];

  public readonly itemsSavingsDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-300' },
    { dateUpdate: '03-05-2018', statement: '2000' },
    { dateUpdate: '02-05-2018', statement: '1500' },
    { dateUpdate: '02-05-2018', statement: '-200' },
    { dateUpdate: '12-05-2017', statement: '2000' }
  ];

  daysPayment() {
    window.open(this.paymentLink, '_blank');
  }

  openModal(type:any) {
    switch (type) {
      case 'savings':
        this.titleDetailsModal = 'Total savings - Details';
        this.itemsDetails = this.itemsSavingsDetails;
        this.detailsModalElement.open();
        break;
      case 'account':
        this.titleDetailsModal = 'Total checking account - Details';
        this.itemsDetails = this.itemsAccountDetails;
        this.detailsModalElement.open();
        break;
    }
  }


}
