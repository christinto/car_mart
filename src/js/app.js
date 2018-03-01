App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // Initialize web3 and set the provider to the testRPC.
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');
      web3 = new Web3(App.web3Provider);
    }
    console.log('init');
    return App.initContract();
  },

  initContract: function() {
    $.getJSON('VehicleManager.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract.
      var VehicleManagerArtifact = data;
      App.contracts.VehicleManager = TruffleContract(VehicleManagerArtifact);

      // Set the provider for our contract.
      App.contracts.VehicleManager.setProvider(App.web3Provider);

      // Use our contract to retieve and mark the adopted pets.
      //return App.getBalances();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '#submitButton', App.submitdetail);
    $(document).on('click', '#searchButton', App.search);
    $(document).on('click', '#searchButton', App.make);
    $(document).on('click', '#searchButton', App.model);
    $(document).on('click', '#searchButton', App.year);
    $(document).on('click', '#transferButton', App.transfer);


  },

  submitdetail: function(event) {
    event.preventDefault();

    var vid = parseInt($('#vid').val());
    var year = $('#year').val();
    var model = $('#model').val();
    var make = $('#make').val();
    var owner = $('#owner').val();

    console.log(vid);

    var vmInstance;

    web3.eth.getAccounts(function(error, accounts) {

      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      App.contracts.VehicleManager.deployed().then(function(instance) {
        vmInstance = instance;
        console.log("check"+account);
//return vmInstance.isVehicle;
        return vmInstance.registerVehicle(vid,year,model,make,owner,{from: account});
      }).then(function(result) {
        alert('submit Successful!'); 
       // return App.getBalances();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },

  search: function(event) {
    event.preventDefault();

    var vsid = parseInt($('#vsid').val());


    console.log(vsid);

    var vmInstance;

    web3.eth.getAccounts(function(error, accounts) {

      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      App.contracts.VehicleManager.deployed().then(function(instance) {
        vmInstance = instance;
        console.log("check"+account);
//return vmInstance.isVehicle;
        return vmInstance.getVehicleOnwer(vsid,{from: account});
      }).then(function(result) {
        //alert('search Successful!'); 
        $('#ownername').text(result);

        console.log(result)
       // return App.getBalances();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },
  make: function(event) {
    event.preventDefault();

    var vsid = parseInt($('#vsid').val());


    console.log(vsid);

    var vmInstance;

    web3.eth.getAccounts(function(error, accounts) {

      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      App.contracts.VehicleManager.deployed().then(function(instance) {
        vmInstance = instance;
        console.log("check"+account);
//return vmInstance.isVehicle;
        return vmInstance.getVehiclemake(vsid,{from: account});
      }).then(function(result) {
        //alert('search Successful!'); 
        $('#vmake').text(result);

        console.log(result)
       // return App.getBalances();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },
  model: function(event) {
    event.preventDefault();

    var vsid = parseInt($('#vsid').val());


    console.log(vsid);

    var vmInstance;

    web3.eth.getAccounts(function(error, accounts) {

      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      App.contracts.VehicleManager.deployed().then(function(instance) {
        vmInstance = instance;
        console.log("check"+account);
//return vmInstance.isVehicle;
        return vmInstance.getVehiclemodel(vsid,{from: account});
      }).then(function(result) {
        //alert('search Successful!'); 
        $('#vmodel').text(result);

        console.log(result)
       // return App.getBalances();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },
  year: function(event) {
    event.preventDefault();

    var vsid = parseInt($('#vsid').val());


    console.log(vsid);

    var vmInstance;

    web3.eth.getAccounts(function(error, accounts) {

      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      App.contracts.VehicleManager.deployed().then(function(instance) {
        vmInstance = instance;
        console.log("check"+account);
//return vmInstance.isVehicle;
        return vmInstance.getVehicleyear(vsid,{from: account});
      }).then(function(result) {
        //alert('search Successful!'); 
        $('#vyear').text(result);

        console.log(result)
       // return App.getBalances();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },
  transfer: function(event) {
    event.preventDefault();

    var vtid = parseInt($('#vtid').val());
    var vo = $('#vo').val();


    console.log(vsid);

    var vmInstance;

    web3.eth.getAccounts(function(error, accounts) {

      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      App.contracts.VehicleManager.deployed().then(function(instance) {
        vmInstance = instance;
        console.log("check"+account);
//return vmInstance.isVehicle;
        return vmInstance.transferVehicle(vtid,vo,{from: account});
      }).then(function(result) {
        alert('Transfer Successful!'); 
        //$('#TTBalance').text(result);

        console.log(result)
       // return App.getBalances();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
