import {
  CastListStyled,
  CastListItem,
  CastListPoster,
  CastListName,
} from './CastList.styled';
export const CastList = ({ credits }) => {
  return (
    <div>
      <CastListStyled>
        {credits.map(credit => {
          return (
            <CastListItem key={credit.credit_id}>
              <CastListPoster
                src={
                  credit.profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + credit.profile_path
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
                }
                alt=""
              />
              <CastListName>{credit.name}</CastListName>
            </CastListItem>
          );
        })}
      </CastListStyled>
    </div>
  );
};
