const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@components': path.resolve(__dirname, 'src/components'),
    '@Banner': path.resolve(__dirname, 'src/components/Banner/Banner'),
    '@EdictsInfoPopup': path.resolve(__dirname, 'src/components/EdictsInfoPopup/EdictsInfoPopup'),
    '@GlobalStyle': path.resolve(__dirname, 'src/components/GlobalStyle/GlobalStyle'),
    '@GlobalComponents': path.resolve(__dirname, 'src/components/GlobalStyle/GlobalComponents'),
    '@Title': path.resolve(__dirname, 'src/components/Title/Title'),
    '@TableAddButton': path.resolve(__dirname, 'src/components/TableAddButton/TableAddButton'),
    '@LoginForm': path.resolve(__dirname, 'src/components/LoginForm/LoginForm'),
    '@StyledLoginForm': path.resolve(__dirname, 'src/components/LoginForm/StyledLoginForm'),
    '@Header': path.resolve(__dirname, 'src/components/Header/Header'),
    '@ActualUserInfo': path.resolve(__dirname, 'src/components/ActualUserInfo/ActualUserInfo'),
    '@Archive': path.resolve(__dirname, 'src/components/_Views/_Archive/Archive'),
    '@Contracts': path.resolve(__dirname, 'src/components/_Views/_Contracts/Contracts'),
    '@Edicts': path.resolve(__dirname, 'src/components/_Views/_Edicts/Edicts'),
    '@Record': path.resolve(__dirname, 'src/components/_Views/_Record/Record'),
    '@SearchBarArchive': path.resolve(__dirname, 'src/components/_SearchBars/SearchBarArchive/SearchBarArchive'),
    '@StyledSearchBar': path.resolve(__dirname, 'src/components/_SearchBars/SearchBarArchive/StyledSearchBar'),
    '@SearchBarEdicts': path.resolve(__dirname, 'src/components/_SearchBars/SearchBarEdicts/SearchBarEdicts'),
    '@SearchBarContracts': path.resolve(__dirname, 'src/components/_SearchBars/SearchBarContracts/SearchBarContracts'),
    '@SearchBarRecords': path.resolve(__dirname, 'src/components/_SearchBars/SearchBarRecords/SearchBarRecords'),
    '@EditFormArchive': path.resolve(__dirname, 'src/components/_EditForms/EditFormArchive/EditFormArchive'),
    '@EditFormContracts': path.resolve(__dirname, 'src/components/_EditForms/EditFormContracts/EditFormContracts'),
    '@EditFormEdicts': path.resolve(__dirname, 'src/components/_EditForms/EditFormEdicts/EditFormEdicts'),
    '@EditFormRecord': path.resolve(__dirname, 'src/components/_EditForms/EditFormRecord/EditFormRecord'),
    '@DataListArchive': path.resolve(__dirname, 'src/components/_DataLists/DataListArchive/DataListArchive'),
    '@StyledDataList': path.resolve(__dirname, 'src/components/_DataLists/DataListArchive/StyledDataList'),
    '@DataListContracts': path.resolve(__dirname, 'src/components/_DataLists/DataListContracts/DataListContracts'),
    '@DataListEdicts': path.resolve(__dirname, 'src/components/_DataLists/DataListEdicts/DataListEdicts'),
    '@DataListRecord': path.resolve(__dirname, 'src/components/_DataLists/DataListRecord/DataListRecord'),
    '@AddFormArchive': path.resolve(__dirname, 'src/components/_AddForms/AddFormArchive/AddFormArchive'),
    '@AddFormEdicts': path.resolve(__dirname, 'src/components/_AddForms/AddFormEdicts/AddFormEdicts'),
    '@AddFormContracts': path.resolve(__dirname, 'src/components/_AddForms/AddFormContracts/AddFormContracts'),
    '@AddFormRecord': path.resolve(__dirname, 'src/components/_AddForms/AddFormRecord/AddFormRecord'),
    '@firebase': path.resolve(__dirname, 'src/utils/firebase'),
    '@setBaner': path.resolve(__dirname, 'src/utils/setBaner'),
    '@sortingFunc': path.resolve(__dirname, 'src/utils/sortingFunc'),
    '@yupvalidation': path.resolve(__dirname, 'src/utils/yupvalidation'),
    '@logo': path.resolve(__dirname, 'src/_assets/logo'),
    '@root': path.resolve(__dirname, 'src/Root'),
    // Dodaj więcej aliasów według potrzeb
  };

  return config;
};
