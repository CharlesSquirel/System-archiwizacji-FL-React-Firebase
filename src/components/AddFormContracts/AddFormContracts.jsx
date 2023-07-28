import React from "react";
import { StyledButton, StyledForm, StyledFormWrapper, StyledInput, StyledInputBox } from "../GlobalStyle/GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddFormContracts = () => {
  return (
    <StyledFormWrapper>
      <StyledForm>
        <StyledInputBox>
          <label htmlFor="signature">Sygnatura:</label>
          <StyledInput id="signature" name="signature" className="input" placeholder="DA..." autoComplete="off"></StyledInput>
          {/* {touched.signature && errors.signature && <ErrorMessage>{errors.signature}</ErrorMessage>} */}
        </StyledInputBox>
        <StyledInputBox>
          <label htmlFor="date">Data:</label>
          <StyledInput id="date" name="date" className="input" placeholder="01.01.2023" autoComplete="off"></StyledInput>
          {/* {touched.date && errors.date && <ErrorMessage>{errors.date}</ErrorMessage>} */}
        </StyledInputBox>
        <StyledInputBox>
          <label htmlFor="description">Opis:</label>
          <StyledInput id="description" name="description" className="input" placeholder="Opis..." autoComplete="off"></StyledInput>
          {/* {touched.description && errors.description && <ErrorMessage>{errors.description}</ErrorMessage>} */}
        </StyledInputBox>
        <StyledInputBox>
          <label htmlFor="tags">Tagi:</label>
          <StyledInput id="tags" name="tags" className="input" placeholder="symfoniczny, Mozart,.." autoComplete="off"></StyledInput>
          {/* {touched.tags && errors.tags && <ErrorMessage>{errors.tags}</ErrorMessage>} */}
        </StyledInputBox>
        <StyledInputBox>
          <label htmlFor="btn">Akcje:</label>
          <StyledButton id="btn" type="submit">
            Dodaj
            <FontAwesomeIcon className="icon" icon={faPlus} />
          </StyledButton>
        </StyledInputBox>
      </StyledForm>
      {/* {addBaner && <Banner text="Poprawnie dodano do bazy danych" />}
              {deleteBaner && <Banner text="Poprawnie usunięto z bazy danych" />}
              {editBaner && <Banner text="Poprawnie zmieniono dane" />} */}
    </StyledFormWrapper>
  );
};

export default AddFormContracts;
