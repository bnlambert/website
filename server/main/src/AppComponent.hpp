//
//  AppComponent.hpp
//  oatpp-web-starter
//
//  Created by Leonid on 3/2/18.
//  Copyright © 2018 lganzzzo. All rights reserved.
//

#ifndef AppComponent_hpp
#define AppComponent_hpp

#include "SitePath.hpp"
#include "StaticFileManager.hpp"
#include "FilesIndex.hpp"

#include "oatpp-libressl/server/ConnectionProvider.hpp"

#include "oatpp/web/server/AsyncHttpConnectionHandler.hpp"
#include "oatpp/web/server/HttpRouter.hpp"
#include "oatpp/network/server/SimpleTCPConnectionProvider.hpp"

#include "oatpp/parser/json/mapping/ObjectMapper.hpp"

#include "oatpp/core/macro/component.hpp"

/**
 *  Class which creates and holds Application components and registers components in oatpp::base::Environment
 *  Order of components initialization is from top to bottom
 */
class AppComponent {
public:
  
  /**
   *  Create ConnectionProvider component which listens on the port
   */
  OATPP_CREATE_COMPONENT(std::shared_ptr<oatpp::network::ServerConnectionProvider>, serverConnectionProvider)("http-provider", [] {
    /* non_blocking connections should be used with AsyncHttpConnectionHandler for AsyncIO */
#if !defined(OATPP_TARGET_APP)
    v_word16 port = 8000;
#else
    v_word16 port = 80;
#endif
    return oatpp::network::server::SimpleTCPConnectionProvider::createShared(port);
  }());
  
  OATPP_CREATE_COMPONENT(std::shared_ptr<oatpp::network::ServerConnectionProvider>, serverSecureConnectionProvider)("https-provider", [] {
    /* non_blocking connections should be used with AsyncHttpConnectionHandler for AsyncIO */
#if !defined(OATPP_TARGET_APP)
    v_word16 port = 8443;
#else
    v_word16 port = 443;
#endif
    oatpp::String keyFile = "/certificate/oatpp.io.key";
    oatpp::String certFile = "/certificate/oatpp.io.crt";
    auto config = oatpp::libressl::Config::createDefaultServerConfig(keyFile, certFile);
    return oatpp::libressl::server::ConnectionProvider::createShared(config, port, true);
  }());
  
  /**
   *  Create Router component
   */
  OATPP_CREATE_COMPONENT(std::shared_ptr<oatpp::web::server::HttpRouter>, httpRouter)([] {
    return oatpp::web::server::HttpRouter::createShared();
  }());
  
  /**
   *  Create ConnectionHandler component which uses Router component to route requests
   */
  OATPP_CREATE_COMPONENT(std::shared_ptr<oatpp::network::server::ConnectionHandler>, serverConnectionHandler)("http-handler", [] {
    OATPP_COMPONENT(std::shared_ptr<oatpp::web::server::HttpRouter>, router); // get Router component
    /* Async ConnectionHandler for Async IO and Coroutine based endpoints */
    auto handler = oatpp::web::server::AsyncHttpConnectionHandler::createShared(router);
    handler->addRequestInterceptor(std::make_shared<SitePath::RedirectToSecureInterceptor>());
    return handler;
  }());
  
  OATPP_CREATE_COMPONENT(std::shared_ptr<oatpp::network::server::ConnectionHandler>, serverSecureConnectionHandler)("http-provider", [] {
    OATPP_COMPONENT(std::shared_ptr<oatpp::web::server::HttpRouter>, router); // get Router component
    /* Async ConnectionHandler for Async IO and Coroutine based endpoints */
    auto handler = oatpp::web::server::AsyncHttpConnectionHandler::createShared(router);
    handler->addRequestInterceptor(std::make_shared<SitePath::RedirectInterceptor>());
    return handler;
  }());
  
  /**
   *  Create ObjectMapper component to serialize/deserialize DTOs in Contoller's API
   */
  OATPP_CREATE_COMPONENT(std::shared_ptr<oatpp::data::mapping::ObjectMapper>, apiObjectMapper)([] {
    auto serializerConfig = oatpp::parser::json::mapping::Serializer::Config::createShared();
    auto deserializerConfig = oatpp::parser::json::mapping::Deserializer::Config::createShared();
    deserializerConfig->allowUnknownFields = false;
    auto objectMapper = oatpp::parser::json::mapping::ObjectMapper::createShared(serializerConfig, deserializerConfig);
    return objectMapper;
  }());

  OATPP_CREATE_COMPONENT(std::shared_ptr<FilesIndex>, filesIndex)([] {
    auto files = std::make_shared<FilesIndex>(STATIC_RES_PATH);
    files->buildIndex();
    return files;
  }());
  
  OATPP_CREATE_COMPONENT(std::shared_ptr<StaticFileManager>, staticFilesManager)([] {
    return std::make_shared<StaticFileManager>();
  }());

};

#endif /* AppComponent_hpp */
