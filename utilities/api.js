const getDataHandler = async (endPoint='', data={}, type='GET') => {
    return $.ajax({
        url: `${config.api_url}/${endPoint}`,
        type: type,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(data)
    });
};